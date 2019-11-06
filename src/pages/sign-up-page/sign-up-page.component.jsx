import React from 'react'
import SignUpContainer from '../../components/sign-up/sign-up.container'
import { Redirect } from 'react-router-dom'

const SignUpPage = ({ selectAuthIsAuth }) => {

   if (selectAuthIsAuth) {
      return <Redirect to='/' />
   }

   return (
      <SignUpContainer />
   );
}

export default SignUpPage;