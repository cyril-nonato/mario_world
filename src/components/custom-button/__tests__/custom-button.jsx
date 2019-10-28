import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import CustomButton from '../custom-button.component'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

describe('Name of the group', () => {

  afterEach(cleanup)

  let wrapper;

  const onClick = jest.fn();
  const type = 'submit'

  beforeEach(() => {
    wrapper = render(<CustomButton onClick={onClick} type={type}>button</CustomButton>)
  })


  test('Should render the correct props', () => {
    const { getByTestId } = wrapper

    expect(getByTestId('button')).toHaveAttribute('type', type);
    expect(getByTestId('button')).toHaveTextContent('button');
  });

  test('Should call the onClick function', () => {
    const { getByTestId } = wrapper;

    fireEvent.click(getByTestId('button'));

    expect(onClick).toHaveBeenCalled();
  });

  test('Should match the snapshot', () => {
    const { asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  })
});