import React, { Fragment } from 'react'
import Spinner from '../spinner/spinner.component';
import Backdrop from '../backdrop/backdrop.component';

const WithSpinner = WrappedComponent => ({ loading, error, ...otherProps }) => {

  if (error) {
    throw Error;
  }

  if (loading) {
    return (
      <Fragment>
        <Backdrop />
        <Spinner />
      </Fragment>
    )
  }

  return (
    <WrappedComponent {...otherProps} />
  )
}

export default WithSpinner;

