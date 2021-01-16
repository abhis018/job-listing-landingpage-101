import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation/Navigation';
import Body from './component/Body/Body';
import React from 'react';
import 'tachyons';

function App() {
  return (
    <div>
      <Navigation/>
      <Body/>
    </div>
  );
}

export default App;
