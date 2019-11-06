import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import renderWithRouter from '../../../utils/test_utils/renderWithRouter'
import SignUp from '../sign-up.component'

afterEach(cleanup);

describe('Sign up Component Test', () => {
  let wrapper;
  const onSignUpRequest = jest.fn();
  beforeEach(() => {
    wrapper = renderWithRouter(<SignUp onSignUpRequest={onSignUpRequest} />)
  })

  test('should be in the document', () => {
    const { getByText } = wrapper;

    expect(getByText('Join now')).toBeInTheDocument();
    expect(getByText('To access to all fun in the world of mario')).toBeInTheDocument();
    expect(getByText('Sign-up form')).toBeInTheDocument();
    expect(getByText(`Already have an account ?`)).toBeInTheDocument();
    expect(getByText('Sign-in here')).toBeInTheDocument();
  });

  test('should call the function', () => {
    const { getByText } = wrapper;

    fireEvent.click(getByText('Sign Up'));

    expect(onSignUpRequest).toHaveBeenCalled();
  });

  test('should show the expected values', () => {
    const { getByPlaceholderText } = wrapper;
    const email = getByPlaceholderText('Email');
    const password = getByPlaceholderText('Password');
    const firstName = getByPlaceholderText('First Name');
    const lastName = getByPlaceholderText('Last Name');
    const confirmPassword = getByPlaceholderText('Confirm Password');

    fireEvent.change(email, { target: { value: 'test' } });
    fireEvent.change(password, { target: { value: 'test' } });
    fireEvent.change(firstName, { target: { value: 'test' } });
    fireEvent.change(lastName, { target: { value: 'test' } });
    fireEvent.change(confirmPassword, { target: { value: 'test' } });

    expect(email.value).toBe('test');
    expect(password.value).toBe('test');
    expect(firstName.value).toBe('test');
    expect(lastName.value).toBe('test');
    expect(confirmPassword.value).toBe('test');
  });

  test('should have the necessary attribute', () => {
    const { getByText } = wrapper;

    expect(getByText('Sign-in here')).toHaveAttribute('href', '/sign-in')
  });

  test('should match the snapshot', () => {
    const {asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });
})