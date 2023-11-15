import { ALL_PROFILES, MY_PROFILE } from "../actions";

const initialState = {
  profiles: [],
  my_profile: {},
};

export default function profileReducer(state = initialState, action) {
  switch (action) {
    case ALL_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };
    case MY_PROFILE: {
      return {
        ...state,
        my_profile: action.payload,
      };
    }
    default:
      return state;
  }
}
