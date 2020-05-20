import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import NavBar from './Components/Layout/NavBar';


const  App =() => {
    return (
      <div>
        <NavBar />
      </div>
    );
};

render(<App />, document.getElementById('root'));
