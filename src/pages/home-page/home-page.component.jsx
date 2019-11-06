import React from 'react'
import PostsNotifContainer from '../../components/posts-notif/posts-notif.container';
import Home from '../../components/home/home.component';

const HomePage = ({match, selectAuthIsAuth}) => {

  return (
    <main>
      {
        selectAuthIsAuth &&
        <PostsNotifContainer />
      }
      {
        !selectAuthIsAuth &&
        <Home />
      }
    </main>
  );
}

export default HomePage;