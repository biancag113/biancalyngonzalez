import './App.css';
import React from "react";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import Login from './components/Login.js';
import profile from './components/profile.png'; 
import Footer from './components/Footer.js';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
        <Login />
        <Header />
        <img src={profile} alt="profile" height="20%" width="20%"/>;
        <NavBar />
        <Footer />
    </div>
    
  );
}

export default App
