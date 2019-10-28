import React, { useState } from 'react'

import * as S from './sign-up.styles'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignUp = ({ onSignUpRequest }) => {
  const [userCreds, setUserCreds] = useState({});
  const handleChange = e => {
    setUserCreds({
      ...userCreds,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userCreds);
    if(userCreds.password === userCreds.confirmPassword) {
      onSignUpRequest(userCreds)
    }
  }

  return (
    <S.Section>
      <S.Div>
        <S.H2>
          Join now
        </S.H2>
        <S.Span>
          to access to all fun in the world of mario
        </S.Span>
      </S.Div>

      <S.Form onSubmit={handleSubmit}>
        <S.FormH3>
          Sign-up form
        </S.FormH3>
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
  );
}

export default SignUp;