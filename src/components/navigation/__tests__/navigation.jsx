import React from 'react'
import {cleanup} from '@testing-library/react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'

import Navigation from '../navigation.component'
import renderWithRouter from '../../../utils/test_utils/renderWithRouter';

afterEach(cleanup);

describe('Navigation Component Test', () => {
  
  test('should match the snapshot', () => {
    const {asFragment} = renderWithRouter(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should have the expected href attribute', async () => {
    const {getByText} = renderWithRouter(<Navigation />);

    expect(getByText('mario world')).toHaveAttribute('href', '/');
    expect(getByText('sign-in')).toHaveAttribute('href', '/sign-in');
    expect(getByText('sign-up')).toHaveAttribute('href', '/sign-up');
  })
});