const initialState = {
  favourites: {
    content: [],
  },
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (el, i) => i !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default jobsReducer;
