import * as actionTypes from './actionType.js';

const initialState = {
  bookmarks: [],
};

const bookmarksReducer = (state = initialState, action) => {
  const { payload, type } = action;
  console.log(payload,"payload from reducer.........")
  switch (action.type) {
    case actionTypes.ADD_BOOKMARK:
      return {
        ...state,
        bookmarks:[...payload],
      };
    default:
      return state;
  }
};

export default bookmarksReducer;
