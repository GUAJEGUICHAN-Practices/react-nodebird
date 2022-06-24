const initialState = {
  name:'park',
  age:27,
  password:'babo',
  user:{
    isLoggedIn:false,
    use:null,
    signUpData:{},
    loginData:{},
  },
  post:{
    mainPosts:[]
  }
}

const changeNickname = {
  type:'CHANGE_NICKNAME',
  data:'boogicho'
}

const rootReducer= (state = initialState, action)=>{
  switch(action.type){
    case 'CHANGE_NICKNAME':
      return {
        ...state,
        name:action.data
      }
    default:
      return state
  }
}