import { useState } from 'react'
import logo from '../../assets/images/logo-header.svg'
import accountIcon from '../../assets/images/account-icon-header.svg'
import searchIcon from '../../assets/images/search-icon-header.svg'
import heartIcon from '../../assets/images/heart-icon-header.svg'
import cartIcon from '../../assets/images/cart-icon-header.svg'
import menuBar from '../../assets/images/menu-bar-icon-header.svg'
import '../../assets/styles/layout/Header.scss'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
      <button className={`menu-toggle ${isMenuOpen ? 'open-toggle': ''}`} onClick={toggleMenu}>
        <img src={menuBar} className='menu-icon' alt="menu bar" />
      </button>
      <div className='logo'>
        <img src={logo} alt="furnito logo" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <img className='mobile-icon' src={searchIcon} alt="Search Icon" />
      <div className='header-icons'>
        <img src={accountIcon} alt="Account Icon" />
        <img src={searchIcon} alt="Search Icon" />
        <img src={heartIcon} alt="Heart Icon" />
        <img src={cartIcon} alt="Cart Icon" />
      </div>
    </div>
  );
}

export default Header;
