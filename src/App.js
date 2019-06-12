import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Contacts/>
        </div>
      </Provider>
    );
  }
}

export default App;
