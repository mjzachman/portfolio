import './styles/Restaurant.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Picture from './images/nuevo-front.jpg';


function Restaurant() {
    

    return <div className="Restaurant">
            <Nav />
            <img id="home" src={Picture} alt="restaurant" />
            <Welcome />
            <Footer />
    </div>
}

export default Restaurant;