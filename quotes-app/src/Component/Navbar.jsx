import React from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const dispatch = useDispatch();
    const navigate= useNavigate()
    const handleBookmark = () => {
        navigate("/bookmarks")
      };
    
    const handleHome = ()=>{
      navigate("/")
    }

  return (
    <div className="Nav">
        <div className='Nav_content'>
            <p onClick={handleHome}>HOME</p>
            <p onClick={handleBookmark}>BOOKMARK</p>
        </div>

    </div>
  )
}

export default Navbar