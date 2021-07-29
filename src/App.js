//package and compnent imports
import React, {Component} from 'react';
import Main from './components/mainComponent';

import './App.css';

//creates App component
class App extends Component {
    
  render () {
    return (    
     /* The Main component from the mainComponent.js file is rendered here and displayed when the index.js is loaded */
    <div className="App">
      <Main />
    </div>
  );
  }
}

//exports it for use in other files
export default App;
