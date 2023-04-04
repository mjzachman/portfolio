import '../styles/Nav.css';
import logo from '../images/logo.png';

function Nav() {
    

    return <div className="Nav">
            <img id="logo" src={logo} alt = "logo.png"/>
            <ul> 
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Contact Us</li>
            </ul> 
    </div>
}

export default Nav;