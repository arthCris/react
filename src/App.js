import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";

import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
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
            <Route exact path="/contacts/edit/:id" component={EditContact} />
          </Switch>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
