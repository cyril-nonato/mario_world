import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'
import SignIn from '../sign-in.component'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import renderWithRouter from '../../../utils/test_utils/renderWithRouter'

afterEach(cleanup);

describe('Sign In Component Test', () => {
  const onSignInRequest = jest.fn();

  let wrapper;
  beforeEach(() => {
    wrapper = renderWithRouter(<SignIn onSignInRequest={onSignInRequest} />);
  })

  test('should call onSignInRequest', () => {
    const { getByText } = wrapper;

    fireEvent.click(getByText('Sign-in'));

    expect(onSignInRequest).toHaveBeenCalledTimes(1);
  });

  test('should be in the document', () => {
    const { getByText } = wrapper;

    expect(getByText('Sign-in')).toBeInTheDocument();
    expect(getByText('Connect now')).toBeInTheDocument();
    expect(getByText('And get in touch with your friends in the world of mario')).toBeInTheDocument();
    expect(getByText(`Don't have an account ?`)).toBeInTheDocument();
  });

  test('should have the correct attribute', () => {
    const { getByText } = wrapper;
    expect(getByText('Sign-up here')).toHaveAttribute('href', '/sign-up')
  });

  test('should match the snapshot', () => {
    const { asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });
});