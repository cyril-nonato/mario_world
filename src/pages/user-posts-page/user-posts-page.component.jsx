import React, {useEffect} from 'react'
import UserPostsContainer from '../../components/user-posts/user-posts.container'

const UserPostsPage = ({onPostsUserRequest}) => {

  useEffect(() => {
    onPostsUserRequest()
  }, [onPostsUserRequest])

  return ( 
    <div>
      <UserPostsContainer />
    </div>
   );
}
 
export default UserPostsPage;