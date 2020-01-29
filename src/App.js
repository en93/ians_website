import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import Home from './components/pages/home/home';
import Projects from './components/pages/projects/projects';
import AboutMe from './components/pages/aboutMe/aboutMe';
import PageNotFound from './components/pages/pageNotFound/pageNotFound';
import Contact from './components/pages/contact/contact';
import Exergame from './components/pages/exergame/exergame';
import PersonalSite from './components/pages/personal-website/personal-website';
import { Route, Switch } from 'react-router-dom'; 
import ReactGA from 'react-ga';

ReactGA.initialize('UA-155064574-1');
function App() {
  console.log(process.env);
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path={["/", "/home"]} exact component={Home} />
          <Route path={"/about"} exact component={AboutMe} />
          <Route path={"/projects"} exact component={Projects} />
          <Route path={"/contact"} exact component={Contact} />
          <Route path={"/projects/exercise-game"} exact component={Exergame} />
          <Route path={"/projects/personal-website"} exact component={PersonalSite} />          
          <Route component={PageNotFound}/>
        </Switch>
      </Layout>
    </div> 
  );
}

export default App;
