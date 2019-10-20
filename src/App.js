import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import styles from './App.module.css';

import PersBuilder from './containers/PersBuilder/PersBuilder';
import AdminPanel from './containers/AdminPanel/AdminPanel';

function App() {
  return (
    <div className={styles['app']}>
      <header className="App-header">
      </header>
      <Switch>
        <Route path="/admin" component={AdminPanel}></Route>
        <Route path="/" exact component={PersBuilder}></Route>
      </Switch>
    </div>
  );
}

export default App;
