import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div>
      <h2>Ooooopsss!</h2>
      <p>The page you are trying to access does not exist in our system anymore. It may have been deleted. Click <a href="/">here</a> to try to go back.</p>
    </div>
  )
}

export default {
  component: NotFound
}