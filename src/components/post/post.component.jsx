import React, {useMemo} from 'react'

import * as S from './post.styles'
import { timeAgo, checkIfEdited } from '../../utils/components';

const Post = ({ click, post: { title, content, created_at, posted_by, edited } }) => {
  const timeElapsed = useMemo(() => timeAgo(created_at), [created_at]);
  const editedText = checkIfEdited(edited);
  
  return (
    <S.LiContainer onClick={click}>
      <S.Background />
      <S.Div>
        <S.H3>{title}</S.H3>
        <S.TimeAgo>{timeElapsed}{editedText}</S.TimeAgo>
        <S.P>{content}</S.P>
        <S.PostedBy>By: <strong>{posted_by}</strong></S.PostedBy>
      </S.Div>
    </S.LiContainer>
  );
}

export default Post;