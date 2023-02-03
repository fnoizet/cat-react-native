import { USER_CHANGE, USER_DISCONNECT } from "../constants";

const initialState = {
  id: null,
  firstname: "",
  lastname: "",
  age: null,
  email: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHANGE:
      return action.payload;
    case USER_DISCONNECT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
