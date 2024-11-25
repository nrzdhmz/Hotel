import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <p>Halalholiday</p>
          <p className="check">check</p>
        </Link>
        <div className="socials">
        </div>
      </div>
    </header>
  );
};

export default Header;
