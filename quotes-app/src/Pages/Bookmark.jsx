
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./Bookmark.css"
const Bookmark= () => {
  const [quote,setQuote]=useState("")
  const bookmarks = useSelector((state) => state.bookmarks);
  console.log(bookmarks,"book...")


  useEffect(()=>{
     setQuote(bookmarks)
  },[quote])
  console.log(quote)

  return (
    <div className='bookmark'> 
      <h1>Bookmarked Quotes</h1>
      <div>
        <p>{quote}</p>
      </div>
    </div>
  );
};



export default Bookmark;
