import React, { useState } from 'react'

import * as S from './create-a-post.styles'
import FormInput from '../form-input/form-input.component'
import FormTextarea from '../form-textarea/form-textarea.component'
import CustomButton from '../custom-button/custom-button.component'
import PopUp from '../pop-up/pop-up.component'

const CreateAPost = ({ onPostCreateRequest, selectPostsFailure, selectPostsSuccess, onPostsPopUpClear, selectPostsPopUp }) => {
  const [details, setDetails] = useState({});

  const handleChange = e => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    onPostCreateRequest(details);
  };

  const formInPutProps = {
    name: 'title', 
    placeholder: 'Title',
    label: 'Title',
    type: 'text'
  };

  const formTextAreaProps = {
    name: 'content',
    rows: 4, 
    placeholder: 'Content', 
    label: 'Content'
  }

  return (
    <S.Section>
      <PopUp checkPopUp={selectPostsPopUp} clearAll={onPostsPopUpClear} success={selectPostsSuccess} failure={selectPostsFailure} />
      <S.Form onSubmit={handleSubmit}>
        <S.H2>
          Create a Post
        </S.H2>
        <FormInput onChange={handleChange} {...formInPutProps}  />
        <FormTextarea onChange={handleChange} {...formTextAreaProps} />
        <CustomButton color='success' type='submit'>Create</CustomButton>
      </S.Form>
    </S.Section>
  );
}

export default CreateAPost;