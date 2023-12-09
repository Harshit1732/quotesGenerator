import React from 'react';
import "./Quotes.css"
import { FaBookmark } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../Redux/action';
function Quotes({ text }) {
  const dispatch = useDispatch();
  const handleBookmark = () => {
    dispatch(addBookmark(text));
   
  };
  return (
    <div className="quote">
      <h1>Random Quote:</h1>
      <p onClick={handleBookmark}><FaBookmark/>:CLICK TO BOOKMARK</p>
      <h3>{text}</h3>
    </div>
  );
}

export default Quotes;
