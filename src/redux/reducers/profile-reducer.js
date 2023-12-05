import { ADD_FRIEND, REMOVE_FRIEND } from "../actions";

const initialState = {
  friends: {
    content: [],
  },
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        friends: {
          // Assicurati che state.friends sia definito prima di accedere a content
          ...(state.friends || {}),
          content: [...(state.friends?.content || []), action.payload],
        },
      };
    case REMOVE_FRIEND:
      return {
        ...state,
        friends: {
          // Assicurati che state.friends sia definito prima di accedere a content
          ...(state.friends || {}),
          content: (state.friends?.content || []).filter(
            (id) => id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
}
