import React from 'react';
import styles from './App.module.css';

import PersBuilder from './containers/PersBuilder/PersBuilder';

function App() {
  return (
    <div className={styles['app']}>
      <header className="App-header">
      </header>
      <PersBuilder />
    </div>
  );
}

export default App;
