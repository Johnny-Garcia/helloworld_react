import React from 'react';
import './App.css';
import HelloClassComponent from './component/helloClassComponent';
import HelloFunctionComponent from './component/helloFunctionComponent';

function App() {
  return (
    <>
      <HelloFunctionComponent name='Jonathan Garcia'/>
      <HelloClassComponent name='Garcia Jonathan'/>
    </>
  );
}

export default App;
