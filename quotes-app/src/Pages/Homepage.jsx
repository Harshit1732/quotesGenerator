import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import "./Homepage.css"
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";
import { FaBookmark } from "react-icons/fa";
import axios from 'axios';
import Quotes from '../Component/Quotes';
import { useState } from 'react';
import Dropdown from '../Component/Dropdown';

const Homepage = () => {
    const [quote, setQuote] = useState('');
    const [tags, setTags] = useState([]);
   

    const fetchRandomQuote = async (tag = '') => {
        try {
          const response = await axios.get(`https://api.quotable.io/random?tag=${tag}`)
          setQuote(response.data.content);
        } catch (error) {
          console.error('Error fetching random quote:', error);
        }
      };
      const handleGenerateQuote = () => {
        fetchRandomQuote();
      };

      const fetchTags = async () => {
        try {
          const response = await axios.get('https://api.quotable.io/tags');
          const tagsData = response.data.map(tag => tag.name); 
          setTags(tagsData);
        } catch (error) {
          console.error('Error fetching tags:', error);
        }
      };
      const handleTagSelect = (tag) => {
        fetchRandomQuote(tag);
      };
    

      useEffect(()=>{
        fetchTags()
        fetchRandomQuote()
      },[])
  return (
    <div>
        <div><Navbar/></div>
        <Dropdown tags={tags} onSelect={handleTagSelect} />
        <div className='container'>
            <div className='wraper_Icon1'>
            <ImQuotesLeft />
            </div>
            <div className='content'>
            <Quotes text={quote} />
          
            </div>
            <button className='button-89' onClick={handleGenerateQuote}>Generate Another Quote</button>
            <div className='wraper_Icon2'>
            <ImQuotesRight />
            </div>

        </div>

    </div>
  )
}

export default Homepage