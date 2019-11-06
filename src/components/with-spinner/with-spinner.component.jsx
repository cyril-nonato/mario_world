import React, { Fragment } from 'react'
import Spinner from '../spinner/spinner.component';
import Backdrop from '../backdrop/backdrop.component';

const WithSpinner = WrappedComponent => ({ loading, ...otherProps }) => {

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

