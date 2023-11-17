import { ADD_FRIEND, REMOVE_FRIEND } from "../actions";

const initialState = {
  friends: {
    content: [],
  },
};

export default function profileReducer(state = initialState, action) {
  switch (action) {
    case ADD_FRIEND:
      return {
        ...state,
        friends: {
          content: [...state.friends.content, action.payload]
        }
      };
    case REMOVE_FRIEND: {
      return {
        ...state,
        friends: {
          content: state.friends.content.filter(
            (fr, i) => i !== action.payload
          ),
        }
      };
    }
    default:
      return state;
  }
}
