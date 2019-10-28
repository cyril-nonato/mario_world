import React from 'react'
import * as S from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false
  }

  static getDerivedStateFromError(error) {
    return {
      hasErrored: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    const { hasErrored } = this.state
    if (hasErrored) {
      return (
        <S.ErrorBoundaryContainer>
          <S.LongDescription>Oops, something went wrong, please try again later</S.LongDescription>
        </S.ErrorBoundaryContainer>
      )
    }
    
    return this.props.children;
  }

};

export default ErrorBoundary;