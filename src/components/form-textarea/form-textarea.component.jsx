import React from 'react'

import * as S from './form-textarea.styles';

const FormTextarea = ({ placeholder, value, name, rows, label, onChange }) => {
  return (
    <S.Container>
      <S.Textarea required value={value} onChange={onChange} rows={rows} name={name} placeholder={placeholder} />
      <S.Label data-testid='label'>{label}</S.Label>
    </S.Container>
  );
}

export default FormTextarea;