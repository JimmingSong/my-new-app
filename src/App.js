import React, { Component } from 'react';
// import logo from './logo.svg';
import Main from './components/Main'

import './App.css';
class App extends Component {
    constructor(props,context){
      super(props);
      this.state= {};
    };
    render() {
        return (
            <div className="App">
                <Main/>
            </div>
        );
    }
}

export default App;
