import '../../assets/styles/layout/Footer.scss'


const Footer = () => {
  return (
    <div className='footer-container'>
        <span>
            <h3 className='footer-headings'>Furniro.</h3>
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
        </span>
        <div>
            <div className='footer-headings'>Links</div>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <div className='footer-headings'>Help</div>
            <ul>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
            </ul>
        </div>
        <div className='footer-form-container'>
            <div className='footer-headings'>Newsletter</div>
            <form>
                <input type="email" placeholder='Enter Your Email Address' />
                <button>SUBSCRIBE</button>
            </form>
        </div>
        <div className='copyright'>
            <p>2024 Furniro. All rights reverved</p>
        </div>
    </div>
  )
}

export default Footer