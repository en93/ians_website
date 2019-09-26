import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import Home from './components/pages/home/home';
import ComingSoon from './components/pages/comingSoon/comingSoon';
import PageNotFound from './components/pages/pageNotFound/pageNotFound';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
        <Route path={["/", "/home"]} exact component={Home} />
        <Route path={"/about"} exact component={ComingSoon} />
        <Route path={"/projects"} exact component={ComingSoon} />
        <Route path={"/contact"} exact component={ComingSoon} />
        <Route component={PageNotFound}/>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
