import './styles/Restaurant.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function Restaurant() {
    

    return <div className="Restaurant">
            <Nav />
            <div> <h1>Picture Wheel</h1> </div>
            <div id="welcome"> 
                <h1>Welcome to the Margarita Shop</h1>
            </div>
            <Footer />
    </div>
}

export default Restaurant;