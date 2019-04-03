import React from 'react';
import { Provider } from 'react-redux';
import { configStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';


const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <div className="home">
        <Navbar />
        <Main />
      </div>
    </Router>
    </Provider>
  )

};


export default App;
