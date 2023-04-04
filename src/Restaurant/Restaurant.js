import './styles/Restaurant.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';

function Restaurant() {
    

    return <div className="Restaurant">
            <Nav />
            <div> <h1>Picture Wheel</h1> </div>
            <div id="welcome-div"> 
                <h1 id="welcome-header">Welcome to the Margarita Shop</h1>
                <div id="welcome-content">
                    <div id="welcome-map">Map Here</div>
                    <div id="welcome-info">
                        <p id="welcome-address">709 Big Hill Ave, <br />
                        Richmond KY 40475</p>
                        <hr class="welcome-hr" />
                        <p id="welcome-phone">(859)624-1433</p>
                        <hr class="welcome-hr" />
                        <div id="socials">
                            <img src={twitter} alt="twitter" id="twitter" />
                            <img src={facebook} alt="facebook" id="facebook" />
                            <img src={instagram} alt="instagram" id="instagram" />
                        
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
    </div>
}

export default Restaurant;