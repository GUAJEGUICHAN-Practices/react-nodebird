import { createSlice } from "@reduxjs/toolkit";

export type ImageProps = {
  src: string
}

export type PostProps = {
  id: number,
  User: {
    id: number,
    nickname: string
  },
  content: string,
  Images: Array<ImageProps>
}

export type PostInitialStateProps = {
  mainPosts: Array<PostProps>
  imagePaths: [],
  postAdded: false
}

const dummyPost = {
  id: new Date().getTime(),
  User: {
    id: 1,
    nickname: 'dummy'
  },
  content: '첫 번째 게시글 dummy # 헤시태그',
  Images: [
    { src: 'https://lh3.googleusercontent.com/keep-bbsk/AGk0z-NTKGs03UI0x0NmrhuXBE-1c2OH1IWwrbL3PVguDoo29j0FqPd3LN4hDnZJPadAQS1o4Ys0rwleKK9AoI1JcQxZNHxAf69oJ75lp1w=s683' },
    { src: 'https://lh3.googleusercontent.com/keep-bbsk/AGk0z-NTKGs03UI0x0NmrhuXBE-1c2OH1IWwrbL3PVguDoo29j0FqPd3LN4hDnZJPadAQS1o4Ys0rwleKK9AoI1JcQxZNHxAf69oJ75lp1w=s683' },
    { src: 'https://lh3.googleusercontent.com/keep-bbsk/AGk0z-NTKGs03UI0x0NmrhuXBE-1c2OH1IWwrbL3PVguDoo29j0FqPd3LN4hDnZJPadAQS1o4Ys0rwleKK9AoI1JcQxZNHxAf69oJ75lp1w=s683' },

  ],
  Comments: [
    {
      User: {
        nickname: 'dummy'
      },
      content: '첫 댓글 dummy'
    }
  ]
}

export const { actions, reducer } = createSlice({
  name: "post",
  initialState: {
    mainPosts: [
      {
        id: 1,
        User: {
          id: 1,
          nickname: '제로초'
        },
        content: '첫 번째 게시글 # 헤시태그',
        Images: [
          { src: 'https://lh3.googleusercontent.com/keep-bbsk/AGk0z-NTKGs03UI0x0NmrhuXBE-1c2OH1IWwrbL3PVguDoo29j0FqPd3LN4hDnZJPadAQS1o4Ys0rwleKK9AoI1JcQxZNHxAf69oJ75lp1w=s683' },
          { src: 'https://lh3.googleusercontent.com/keep-bbsk/AGk0z-NTKGs03UI0x0NmrhuXBE-1c2OH1IWwrbL3PVguDoo29j0FqPd3LN4hDnZJPadAQS1o4Ys0rwleKK9AoI1JcQxZNHxAf69oJ75lp1w=s683' },
          { src: 'https://lh3.googleusercontent.com/keep-bbsk/AGk0z-NTKGs03UI0x0NmrhuXBE-1c2OH1IWwrbL3PVguDoo29j0FqPd3LN4hDnZJPadAQS1o4Ys0rwleKK9AoI1JcQxZNHxAf69oJ75lp1w=s683' },

        ],
        Comments: [
          {
            User: {
              nickname: '제로초'
            },
            content: '첫 댓글'
          }
        ]
      }
    ],
    imagePaths: [],
    postAdded: false
  },
  reducers: {
    addPost: (state, { payload }) => ({
      ...state,
      mainPosts: [
        {
          ...dummyPost,
          id: new Date().getTime()
        },
        ...state.mainPosts,
      ],
      postAdded: true
    })
  }
});

export const { addPost } = actions

export default reducer;