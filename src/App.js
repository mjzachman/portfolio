import './App.css';
import Home from './Home';
import Restaurant from './Restaurant/Restaurant';
import Business from './Business/Business';
import Blog from './Blog/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/restaurant" element = {<Restaurant />} />
          <Route path = "/business" element = {<Business />} />
          <Route path = "/blog" element = {<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;