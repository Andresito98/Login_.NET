import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from '../pages/Menu';
import Login from '../pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;