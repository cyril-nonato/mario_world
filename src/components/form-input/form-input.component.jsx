import React from 'react'

import * as S from './form-input.styles';

const FormInput = ({placeholder,name, type, label, onChange}) => {
  return ( 
    <S.Container>
      <S.Input data-testid='input' required name={name} onChange={onChange} type={type} placeholder={placeholder} />
      <S.Label data-testid='label'>{label}</S.Label>
    </S.Container>
   );
}
 
export default FormInput;