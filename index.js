import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import NavBar from './Components/Layout/NavBar';
import MainContainer from './Components/Layout/MainContainer'


const  App =() => {
    return (
      <div>
        <NavBar />
        <br/>
        <MainContainer />
      </div>
    );
};

render(<App />, document.getElementById('root'));
