import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import MainPage from './pages/main-page/main-page.component';

function App() {
  return (
   <Switch>
   <Route exact path="/" component={MainPage} />
   </Switch>
  );
}

export default App;
