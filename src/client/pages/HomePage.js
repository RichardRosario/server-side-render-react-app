import React from 'react';

const HomePage = () => {
  return (
    <div className="center-align" style={{ marginTop: '100px' }}>
      <h1>Welcome</h1>
      <p>Awesome Server Side Rendering For React!</p>
      <p>With Google OAuth</p>
      <ul>
        <label>TODO</label>
        <li>Extend login Authentication for Facebook, Twitter, LinkedIn</li>
        <li>And some other cool stuff...</li>
        <li>Feel free to email me at tech2js@gmail.com</li>
        <li>Follow me on twitter <a href="https://twitter.com/tech2js"> tech2js</a></li>
        <li>I am also on <a href="https://www.linkedin.com/in/richard-rosario-3b8774146/"> LinkedIn</a></li>
      </ul>
    </div>
  )
}

export default {
  component: HomePage
}