import { SET_ACCESS_TOKEN } from "../actions";

const initialState = {
  accessToken: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        accessToken: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
