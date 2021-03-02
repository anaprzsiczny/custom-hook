import React from 'react';
import './App.css';
import Cookie from './components/cookie';
import useTermsAndConditions from './hooks/useTermsAndConditions';
import { Redirect } from 'react-router-dom';

function App() {

  const termsAndConditions = useTermsAndConditions()

  return (
    <div className="App">
      {termsAndConditions ? <p>Welcome, visitor!</p> : <Cookie />}
      {termsAndConditions && <Redirect to="/home" />}
    </div>
  );
}

export default App;
