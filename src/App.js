import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { GlobalStyles } from './App.styles';

import NavigationContainer from './components/navigation/navigation.container';
import UserPostsPageContainer from './pages/user-posts-page/user-posts-page.container';
import CreateAPostPageContainer from './pages/create-a-post-page/create-a-post-page.container';
import HomePageContainer from './pages/home-page/home-page.container';
import SignInPageContainer from './pages/sign-in-page/sign-in-page.container';
import SignUpPageContainer from './pages/sign-up-page/sign-up-page.container';

function App() {

  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <NavigationContainer />
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <Route path='/sign-in' component={SignInPageContainer} />
          <Route path='/sign-up' component={SignUpPageContainer} />
          <Route path='/create-a-post' component={CreateAPostPageContainer} />
          <Route path='/your-posts' component={UserPostsPageContainer} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
