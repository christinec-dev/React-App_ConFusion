//package and compnent imports
import React, {Component} from 'react';
import Main from './components/mainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'

//makes redux store available to app.js
const store = ConfigureStore();

//creates App component
class App extends Component {
    
  render () {
    return ( 
      //makes redux store available to all components   
      <Provider store={store}>
      //Increases navigation fluency and enabled main component 
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    </Provider>
  );
  }
}

//exports it for use in other files
export default App;
