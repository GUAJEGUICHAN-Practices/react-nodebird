import { createSlice } from "@reduxjs/toolkit";

export type UserInitialStateProps = {
  id: string,
  password: string
}


export const { actions, reducer } = createSlice({
  name: 'user',
  initialState: {
    id: '',
    password: ''
  },
  reducers: {

  }
})

export default reducer;