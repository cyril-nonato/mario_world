import React, {useEffect} from 'react'
import UserPostsContainer from '../../components/user-posts/user-posts.container'
import { Redirect } from 'react-router-dom'

const UserPostsPage = ({onPostsUserRequest, selectAuthIsAuth}) => {

  useEffect(() => {
    onPostsUserRequest()
  }, [onPostsUserRequest])

  if (!selectAuthIsAuth) {
    return <Redirect to='/' />
  }

  return ( 
    <div>
      <UserPostsContainer />
    </div>
   );
}
 
export default UserPostsPage;