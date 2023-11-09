import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white bg-gray-500">Brewery Search</Link>
        </li>
        <li>
          <Link to="/brewery/details/1" className="text-white">Brewery Details</Link>
        </li>
        <li>
          <Link to="/brewery/review" className="text-white">Add Review</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;