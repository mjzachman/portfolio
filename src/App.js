import './App.css';
import Home from './Home';
import Nuevo from './Restaurant/Restaurant';
import NuevoContact from './Restaurant/components/Contact';
import Business from './Business/Business';
import Blog from './Blog/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/restaurant" element = {<Nuevo />} />
          <Route path = "/restaurant/contact" element = {<NuevoContact />} />
          <Route path = "/business" element = {<Business />} />
          <Route path = "/blog" element = {<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;