import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
