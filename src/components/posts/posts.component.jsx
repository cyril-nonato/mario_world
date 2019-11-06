import React from 'react'
import Post from '../post/post.component'

import * as S from './posts.styles'

const Posts = ({ selectPostsData }) => {
  return (
    <S.PostsContainer>
      {
        selectPostsData.map(post => <Post key={post.id} post={post} />)
      }
    </S.PostsContainer>
  );
}

export default Posts;