import './footer.css';
import { Link } from 'react-router-dom';

function Footer(){
  return(
    <div className='footer'>
      <div className="block">
        <h3>CONNECT</h3>
        <Link to='/contact'>Facebook</Link>
        <Link to='/contact'>Instagram</Link>
        <Link to='/contact'>Twiter</Link>
      </div>

      <div className="block">
        <h3>SERVICES</h3>
        <Link to='/'>best seller</Link>
      </div>

      <div className="block">
        <h3>NEWLETTER</h3>
        <Link>Sign up for newsletter and get 10% cash
          back offer
        </Link>
        <form className='new-letter'>
        <input type="text" placeholder='Your email address...'/>
        <input type="submit" value="SUBSCRIBE" />
        </form>
      </div>
    </div>
  );
}

export default Footer;