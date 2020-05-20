import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


const  App =() => {
  let msg = "world";
    return (
      <div>
        <Hello name={msg} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
};

render(<App />, document.getElementById('root'));
