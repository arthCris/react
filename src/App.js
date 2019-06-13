import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import { Provider } from './context';

import './App.css';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contacts/add" component={AddContact} />
          </Switch>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
