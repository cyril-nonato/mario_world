import React from 'react'
import SignInContainer from '../../components/sign-in/sign-in.container'
import { Redirect } from 'react-router-dom'

const SignInPage = ({ selectAuthIsAuth }) => {

   if(selectAuthIsAuth) {
      return <Redirect to='/' />
   }
   return (
      <SignInContainer />
   );
}

export default SignInPage;