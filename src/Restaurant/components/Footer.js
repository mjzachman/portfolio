import '../styles/Footer.css';
import footerImg from '../images/footer.png';

function Footer() {
    

    return <div className="Footer">
            <div className="footer-container">
            <div className = "footer-content"> 
                <h3>Location</h3>
                <p>709 Big Hill Ave,<br />
                Richmond KY, 40475<br />
                (859)624-1433</p>
            </div>
            <img id="footer-img" src={footerImg} alt="footer.png" />
            <div className = "footer-content">
                <h3>Hours</h3>
                <p>Monday - Saturday<br />
                11:00am - 10:00pm</p>
                <p>Sunday<br />
                11:30am - 9:00pm</p>
            </div>
            </div>

            <div className='links'>
                <a href="/restaurant/about"><p>About Us</p></a>
                <a href="/restaurant/contact"><p>Contact Us</p></a>
            </div>
            
    </div>
}

export default Footer;