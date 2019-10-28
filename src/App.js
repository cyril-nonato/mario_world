import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/home-page/home-page.component';
import Navigation from './components/navigation/navigation.component';
import { GlobalStyles } from './App.styles';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/sign-in' component={SignInPage} />
          <Route path='/sign-up' component={SignUpPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
