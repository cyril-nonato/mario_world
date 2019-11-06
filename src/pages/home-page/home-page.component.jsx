import React from 'react'
import { Route } from 'react-router-dom'
import PostsNotifContainer from '../../components/posts-notif/posts-notif.container';

const HomePage = ({match, selectAuthIsAuth}) => {

  return (
    <main>
      {
        selectAuthIsAuth &&
        <Route path={`${match.url}`} component={PostsNotifContainer} />
      }
      
    </main>
  );
}

export default HomePage;