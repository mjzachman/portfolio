import '../styles/Nav.css';
import logo from '../images/logo.png';

function Nav() {
    

    return <div className="Nav">
            <img id="logo" src={logo} alt = "logo.png"/>
            <ul> 
                <a href="/restaurant"><li>Home</li></a>
                <a href="/restaurant/about"><li>About</li></a>
                <a href="/restaurant/menu"><li>Menu</li></a>
                <a href="/restaurant/contact"><li>Contact Us</li></a>
            </ul> 
    </div>
}

export default Nav;