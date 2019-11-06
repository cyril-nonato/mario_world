import React, { useState, Fragment } from 'react'
import Post from '../post/post.component'
import * as S from './user-posts.styles'
import EditDeletePostContainer from '../edit-delete-post/edit-delete-post.container';
import PopUp from '../pop-up/pop-up.component';

const UserPosts = ({ onPostsDeleteRequest, selectPostsFilteredData, onPostEditRequest, selectPostsPopUp, selectPostsSuccess, selectPostsFailure, onPostsPopUpClear }) => {
  
  const [selectedPost, setSelectedPost] = useState({ title: '', content: '' });
  


  const handleChange = e => {

    setSelectedPost({
      ...selectedPost,
      [e.target.name]: e.target.value
    })
  }

  const handlePost = (post) => {
    setSelectedPost({ ...post });
  }

  const handleBackdrop = () => {
    setSelectedPost({ title: '', content: '' })
  }

  const handleSubmit = e => {
    e.preventDefault();
    onPostEditRequest(selectedPost);
    setSelectedPost();
  }

  const handleDelete = () => {
    onPostsDeleteRequest(selectedPost.id);
    setSelectedPost({ title: '', content: '' })
  }

  return (
    <Fragment>

      <EditDeletePostContainer
        deleteClick={handleDelete}
        backdropClick={handleBackdrop}
        onChange={handleChange}
        onSubmit={handleSubmit}
        post={selectedPost}
      />
      <PopUp
        checkPopUp={selectPostsPopUp}
        clearAll={onPostsPopUpClear}
        success={selectPostsSuccess}
        failure={selectPostsFailure}
      />

      <S.UserPostsContainer>
        {
          selectPostsFilteredData.map(post =>
            <Post
              click={() => handlePost(post)}
              key={post.id}
              post={post}
            />
          )
        }

      </S.UserPostsContainer>
    </Fragment>
  );
}

export default UserPosts;