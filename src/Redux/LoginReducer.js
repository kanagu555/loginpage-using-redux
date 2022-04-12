import { LOGIN_IN } from "./LoginAction";

const inititalState = {
  userName: "",
};

const LoginReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOGIN_IN:
      return {
        ...state,
        userName: action.payload,
      };
    default: {
      return state;
    }
  }
};


export default LoginReducer