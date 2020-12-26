import './App.css';
import React from "react";


import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
    <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App)
