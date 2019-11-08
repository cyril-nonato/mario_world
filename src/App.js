import React, { Suspense, lazy } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { GlobalStyles } from './App.styles';

import NavigationContainer from './components/navigation/navigation.container'
import NotFoundPage from './pages/not-found-page/not-found-page.component';
import HomePageContainer from './pages/home-page/home-page.container'
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const UserPostsPageContainer = lazy(() => import('./pages/user-posts-page/user-posts-page.container'));
const CreateAPostPageContainer = lazy(() => import('./pages/create-a-post-page/create-a-post-page.container'));
const SignInPageContainer = lazy(() => import('./pages/sign-in-page/sign-in-page.container'));
const SignUpPageContainer = lazy(() => import('./pages/sign-up-page/sign-up-page.container'))


function App() {

  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <ErrorBoundary>
          <NavigationContainer />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path='/' component={HomePageContainer} />
              <Route path='/sign-in' component={SignInPageContainer} />
              <Route path='/sign-up' component={SignUpPageContainer} />
              <Route path='/create-a-post' component={CreateAPostPageContainer} />
              <Route path='/your-posts' component={UserPostsPageContainer} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </React.Fragment>
  );
}

export default App;
