import React from 'react';
import "./Dropdown.css"
function Dropdown({ tags, onSelect }) {
  const handleTagSelect = (e) => {
    const selectedTag = e.target.value;
    onSelect(selectedTag);
  };

  return (
    <div className="dropdown">
      <h2>SELECT A TAG:</h2>
      <select onChange={handleTagSelect}>
        <option value="">TAG SECTION:</option>
        {tags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
