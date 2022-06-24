// import { Button, Form, Input } from 'antd'

import { PostProps } from "../slices/postSlice"

// import { useSelector, useDispatch } from 'react-redux';
// import React from 'react'
// import { InitialStateProps } from '../store/configureStore';

type PostCardProps = {
  post: PostProps
}

const PostCard = ({ post }: PostCardProps) => {
  // const { imagePaths } = useSelector((state: InitialStateProps) => (
  //   state.postReducer
  // ))
  return (
    <div>{post.content}</div>
  )
}

export default PostCard