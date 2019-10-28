import React, { useState } from 'react'

import * as S from './sign-in.styles'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = ({ onSignInRequest }) => {
  const [emailAndPassword, setEmailAndPassword] = useState({});

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
    <S.Section>
      <S.Div>
        <S.H2>
          Connect now
        </S.H2>
        <S.Span>
          And get in touch with your friends in the world of mario
        </S.Span>
      </S.Div>

      <S.Form onSubmit={handleSubmit}>
        <S.FormH3>SIGN-IN FORM</S.FormH3>
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
  );
}

export default SignIn;