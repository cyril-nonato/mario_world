import React, { useState, useEffect, Fragment } from 'react'

import * as S from './sign-in.styles'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import PopUp from '../pop-up/pop-up.component';

const SignIn = ({ onAuthPopUpClear, onSignInRequest, selectAuthUserCreds, history, selectAuthPopUp, selectAuthFailure, selectAuthSuccess }) => {
  const [emailAndPassword, setEmailAndPassword] = useState({});

  useEffect(() => {
    if (selectAuthUserCreds) {
      history.push('/');
    }

  }, [selectAuthUserCreds, history])

  const handleChange = e => {
    setEmailAndPassword({
      ...emailAndPassword,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSignInRequest(emailAndPassword)
  }

  return (
    <Fragment>
      <PopUp clearAll={onAuthPopUpClear} checkPopUp={selectAuthPopUp} success={selectAuthSuccess} failure={selectAuthFailure} />
      <S.Section>
        <S.DivBg>
          <S.H2>
            Connect now
        </S.H2>
          <S.Span>
            And get in touch with your friends in the world of mario
        </S.Span>
        </S.DivBg>

        <S.Form onSubmit={handleSubmit}>
          <S.H3>SIGN-IN FORM</S.H3>
          <FormInput
            onChange={handleChange}
            name='email'
            type='email'
            placeholder='Email'
            label='Email'
          />
          <FormInput
            onChange={handleChange}
            name='password'
            type='password'
            placeholder='Password'
            label='Password'
          />
          <CustomButton type='submit'>
            Sign-in
        </CustomButton>

          <S.SpanLink>
            Don't have an account ?
            <S.LinkToSignUp to='/sign-up'>
              Sign-up here
            </S.LinkToSignUp>
          </S.SpanLink>

        </S.Form>
      </S.Section>
    </Fragment>
  );
}

export default SignIn;