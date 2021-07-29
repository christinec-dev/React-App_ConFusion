//package and compnent imports
import React, {Component} from 'react';
import Main from './components/mainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

//creates App component
class App extends Component {
    
  render () {
    return (    
      //Increases navigation fluency and enabled main component 
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
  }
}

//exports it for use in other files
export default App;
