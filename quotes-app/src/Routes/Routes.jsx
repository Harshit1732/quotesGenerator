import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Bookmark from '../Pages/Bookmark';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/bookmarks" element={<Bookmark/>} />
     
    </Routes>
  );
};

export default AllRoutes;
