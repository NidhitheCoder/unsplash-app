import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import MainPage from './pages/main-page/main-page.component';
import LoginAndSignUp from './pages/login-and-signUp/login-and-SignUp.component';

function App() {
  return (
   <Switch>
   <Route exact path="/" component={MainPage} />
   <Route path ="/login" component={LoginAndSignUp} />
   </Switch>
  );
}

export default App;
