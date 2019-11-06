import React, { useState, useEffect, Fragment } from 'react'

import * as S from './sign-up.styles'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import PopUp from '../pop-up/pop-up.component';

const SignUp = ({ onAuthPopUpClear, onSignUpRequest, selectAuthUserCreds, history, selectAuthSuccess, selectAuthFailure, selectAuthPopUp }) => {

  const [userCreds, setUserCreds] = useState({});

  useEffect(() => {
    if (selectAuthUserCreds) {
      history.push('/')
    }
  }, [selectAuthUserCreds, history])

  const handleChange = e => {
    setUserCreds({
      ...userCreds,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSignUpRequest(userCreds)
  }
  
  return (
    <Fragment>
      <PopUp clearAll={onAuthPopUpClear} checkPopUp={selectAuthPopUp} success={selectAuthSuccess} failure={selectAuthFailure} />
      <S.Section>
        <S.DivBg>
          <S.H2>
            Join now
        </S.H2>
          <S.Span>
            To access to all fun in the world of mario
        </S.Span>
        </S.DivBg>

        <S.Form onSubmit={handleSubmit}>
          <S.H3>
            Sign-up form
        </S.H3>
          <FormInput
            onChange={handleChange}
            name='email'
            type='email'
            placeholder='Email'
            label='Email'
          />
          <FormInput
            onChange={handleChange}
            name='firstName'
            type='text'
            placeholder='First Name'
            label='First Name'
          />
          <FormInput
            onChange={handleChange}
            name='lastName'
            type='text'
            placeholder='Last Name'
            label='Last Name'
          />
          <FormInput
            onChange={handleChange}
            name='password'
            type='password'
            placeholder='Password'
            label='Password'
          />
          <FormInput
            onChange={handleChange}
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            label='Confirm Password'
          />
          <CustomButton type='submit'>
            Sign Up
        </CustomButton>

          <S.SpanLink>
            Already have an account ?
            <S.LinkToSignIn to='/sign-in'>
              Sign-in here
            </S.LinkToSignIn>
          </S.SpanLink>

        </S.Form>
      </S.Section>
    </Fragment>
  );
}

export default SignUp;