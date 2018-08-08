import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';


const app = express();

app.use(
  '/api', 
  proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
})
);

app.use(express.static('public'));
//route handler
app.get('*', (req, res) => {
  const store = createStore(req);

  //logic to initial and load data into store
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  })
    .map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      })
    }
  });
  
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(303, context.url);
    }

    if(context.notFound) {
      res.status(404);
    }

    res.send(content);
  })
});

app.listen( 3000, () => {
  console.log('Listening on port 3000');
});