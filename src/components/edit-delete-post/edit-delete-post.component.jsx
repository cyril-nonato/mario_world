import React from 'react'
import * as S from './edit-delete-post.styles'
import Backdrop from '../backdrop/backdrop.component';
import FormInput from '../form-input/form-input.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import CustomButton from '../custom-button/custom-button.component';

const EditDeletePost = ({ deleteClick, post, onSubmit, onChange, backdropClick }) => {

  const { title, content } = post;

  return (
    
    <S.EditDeletePostContainer title={title} content={content} onSubmit={onSubmit}>
      
      <Backdrop onClick={backdropClick} />

      <S.Form title={title} content={content}>
        <S.H2>Edit Post</S.H2>
        <FormInput
          placeholder='Title'
          type='text'
          name='title'
          label='Title'
          value={title}
          onChange={onChange}
        />
        <FormTextarea
          placeholder='Content'
          type='textarea'
          name='content'
          label='Content'
          rows='6'
          value={content}
          onChange={onChange}
        />
        <S.ButtonContainer>
          <CustomButton type='submit'>
            Edit Post
          </CustomButton>
          <CustomButton onClick={deleteClick} type='button'>
            Delete Post
          </CustomButton>
        </S.ButtonContainer>

      </S.Form>
    </S.EditDeletePostContainer>
  );
}

export default EditDeletePost;