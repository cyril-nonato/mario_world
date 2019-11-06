import React, {Fragment} from 'react'
import CreateAPostContainer from '../../components/create-a-post/create-a-post.container';
import { Redirect } from 'react-router-dom'

const CreateAPostPage = ({selectAuthIsAuth}) => {

  if(!selectAuthIsAuth) {
    return <Redirect to='/' />
  }
  
  return ( 
    <Fragment>
      <CreateAPostContainer />
    </Fragment>
  );
}
 
export default CreateAPostPage;