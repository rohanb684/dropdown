import './App.css';
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const items = ["Yes", "Probably Not"];

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close dropdown when an item is clicked
  };


  return (
    <div className='wrapper'>
      <h2>Should You use  a dropdown</h2>
    <div className="dropdown-container" onMouseLeave={toggleDropdown}>
    <div className="dropdown-button" onMouseEnter={toggleDropdown} >
     <p>{selectedItem || 'Select'}</p> <FaAngleDown/>
    </div>
    {isOpen && (
      <ul className="dropdown-list">
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)} className="dropdown-item">
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
  </div>
  );
}

export default App;
