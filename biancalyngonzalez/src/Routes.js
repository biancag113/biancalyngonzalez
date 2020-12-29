import './App.css';
import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Projects } from './views/Projects';
import { Videos } from './views/Videos';
import { Blog } from './views/Blog';
import { Frontline } from './views/Frontline';
import { Contact } from './views/Contact';
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import Login from './components/Login.js';
import profile from './components/profile.png'; 
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Login />
      <center><Header /></center>
      <center><img src={profile} alt="profile" height="20%" width="20%" /></center>
      <center><NavBar /></center>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Videos" component={Videos} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Frontline" component={Frontline} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
};