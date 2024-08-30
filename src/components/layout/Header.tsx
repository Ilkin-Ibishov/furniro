import { useState } from 'react'
import { Link } from 'react-router-dom';
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
    <header>
      <button className={`menu-toggle ${isMenuOpen ? 'open-toggle': ''}`} onClick={toggleMenu}>
        <img src={menuBar} className='menu-icon' alt="menu bar" />
      </button>
      <div className='logo'>
        <Link to='/'><img src={logo} alt="furnito logo" /></Link>
        
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <ul className={`not-in-desktop ${isMenuOpen ? 'open' : ''}`}>
          <li>Cart</li>
          <li>Favorites</li>
          <li>Account</li>
        </ul>
      </nav>
      <div className='header-icons'>
        <img className="not-in-mobile" src={accountIcon} alt="Account Icon" />
        <img className='mobile-icon' src={searchIcon} alt="Search Icon" />
        <img className="not-in-mobile" src={heartIcon} alt="Heart Icon" />
        <img className="not-in-mobile" src={cartIcon} alt="Cart Icon" />
      </div>
    </header>
  );
}

export default Header;
