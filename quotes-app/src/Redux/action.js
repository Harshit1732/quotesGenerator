import * as actionTypes from './actionType.js';


  export const addBookmark = (quote) => (dispatch) => {
    console.log(quote,"quote............")
    dispatch({
      type: actionTypes.ADD_BOOKMARK,
      payload:quote
     
    });
    console.log(quote,"from action................")
  };
  