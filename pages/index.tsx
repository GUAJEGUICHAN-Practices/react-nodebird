import React from 'react';
import { AppLayout } from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector, useDispatch } from 'react-redux';
import { InitialStateProps } from '../store/configureStore';
import { PostProps } from '../slices/postSlice';


const Home = () => {
  const { isLoggedIn } = useSelector((state: InitialStateProps) => (
    state.authReducer.user
  ))
  const { mainPosts } = useSelector((state: InitialStateProps) => (
    state.postReducer
  ))

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post: PostProps) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  )
}

export default Home;