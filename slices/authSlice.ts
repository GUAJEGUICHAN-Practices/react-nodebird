import { createSlice } from "@reduxjs/toolkit";

export type AuthInitialStateProps = {
  name: string,
  age: number,
  password: string,
  user: {
    isLoggedIn: boolean,
    use: any,
    signUpData: object,
    loginData: object,
  },
  post: {
    mainPosts: [],
  }
}

const initialState: AuthInitialStateProps = {
  name: 'park',
  age: 27,
  password: 'babo',
  user: {
    isLoggedIn: false,
    use: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: []
  }
}

// export const counterSlice
export const { actions, reducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, { payload }) => {
      console.log("setLoggedIn got payload : ", payload)
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: payload
        }
      }
    },

  }
})

export const {
  setLoggedIn
} = actions;

export default reducer;