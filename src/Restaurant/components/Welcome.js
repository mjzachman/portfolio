import '../styles/Welcome.css';
import red from "../images/red-marg.png"
import yellow from "../images/yellow-marg.png";
import green from "../images/green-marg.png";


function Welcome() {
    

    return <div className="Welcome">
            <h1 id="welcome-header">Welcome to the Margarita Shop</h1>
            
            <div id="welcome-content">
            <img className="margarita" id="red" src={red} alt="a red margarita" />
            <img className="margarita" id="yellow" src={yellow} alt="a yellow margarita" />
            <img className="margarita" id="green" src={green} alt="a green margarita" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p></div>
            <a href="/restaurant/about"><p>About Us</p></a>
            
        </div>
            
}

export default Welcome;