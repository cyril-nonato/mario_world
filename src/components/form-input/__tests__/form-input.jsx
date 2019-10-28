import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import FormInput from '../form-input.component'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

describe('Name of the group', () => {

  afterEach(cleanup)
  
  const mockedProps = {
    placeholder: 'placeholder',
    name: 'name',
    type: 'type',
    label: 'label',
  }
  const onChange = jest.fn()
  let wrapper;
  beforeEach(() => {
    wrapper = render(<FormInput {...mockedProps} onChange={onChange} />)
  })
  test('Should render the correct props', () => {
    const {getByPlaceholderText, getByTestId} = wrapper;
  
    expect(getByPlaceholderText(mockedProps.placeholder)).toHaveAttribute('type', mockedProps.type);
    expect(getByPlaceholderText(mockedProps.placeholder)).toHaveAttribute('name', mockedProps.name);
    expect(getByTestId('label')).toHaveTextContent(mockedProps.label);
  });

  test('Should call onChange function', () => {
    const {getByTestId} = wrapper;

    fireEvent.change(getByTestId('input'), {target: {value: 'hello'}});
    expect(getByTestId('input').value).toBe('hello');
  });

  test('Should match the snapshot', () => {
    const {asFragment} = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });
});