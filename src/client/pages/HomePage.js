import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>This is my  home component.</div>
      <button onClick={() => console.log('Hi There!')}>Press me</button>
    </div>
  )
}

export default {
  component: HomePage
}