import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import Home from './components/home/home';
import BackgroundCredit from './components/backgroundCredit/backgroundCredit';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
        <BackgroundCredit/>
      </Layout>
    </div>
  );
}

export default App;
