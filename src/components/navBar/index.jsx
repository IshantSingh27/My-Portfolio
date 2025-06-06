import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const navItems = [
  { label: 'ISHANT SINGH', to: '/' },
  { label: 'ABOUT ME', to: '/about' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'RESUME', to: '/resume' },
  { label: 'PROJECTS', to: '/portfolio' },
  { label: 'CONTACT', to: '/contact' },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__container__logo">
          <img src="/icon.jpg" alt="Logo" />
        </Link>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {navItems.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link to={item.to} className="navbar__container__menu__item__links" onClick={() => setToggleIcon(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={35} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
