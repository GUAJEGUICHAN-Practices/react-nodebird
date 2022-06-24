import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

import { applyMiddleware, combineReducers, compose, createStore, StoreEnhancer } from "redux";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer, { AuthInitialStateProps } from '../slices/authSlice'
import userReducer, { UserInitialStateProps } from '../slices/userSlice'
import postReducer, { PostInitialStateProps } from '../slices/postSlice'

// const middlewares:Array<any> = [];
// const enhancer = process.env.NODE_ENV === 'production'?
// compose(applyMiddleware(...middlewares)):
// composeWithDevTools(applyMiddleware(...middlewares))
// // const store = configureStore(reducer);

// const rootReducer = combineReducers({
//   authReducer
// })

export type InitialStateProps = {
  authReducer: AuthInitialStateProps,
  userReducer: UserInitialStateProps,
  postReducer: PostInitialStateProps
}

const makeStore = (context: any) =>
  configureStore({
    reducer: {
      authReducer,
      userReducer,
      postReducer
    },
  })
  ;

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development'
});//debug를 development로 해놔야 리덕스 오류를 자세히 보여준다. 

export default wrapper;

//현재가 기본적인 세팅이다.