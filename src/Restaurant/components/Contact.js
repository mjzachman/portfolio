import '../styles/Contact.css';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import Nav from './Nav';
import Footer from './Footer';
import Picture from '../images/nuevo-front.jpg';


function Contact() {
    return <div className="Contact">
        <Nav />
        <img id="home" src={Picture} alt="restaurant" />
        <div id="contact-div"> 
            <h1 id="contact-header">Welcome to the Margarita Shop</h1>
            <div id="contact-content">
                <div id="contact-map">
                    <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.2937182331775!2d-84.27749161057758!3d37.73625301363495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8842fdf36d767a43%3A0x12f0ca18ddd9d4bc!2sNuevo%20Vallarta!5e0!3m2!1sen!2sus!4v1680648526865!5m2!1sen!2sus" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div id="contact-info">
                    <p id="contact-address">709 Big Hill Ave, <br />
                    Richmond KY 40475</p>
                    <hr class="contact-hr" />
                    <p id="contact-phone">(859)624-1433</p>
                    <hr class="contact-hr" />
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

export default Contact;