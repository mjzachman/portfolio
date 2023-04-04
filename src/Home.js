import './Home.css';
import Project from './Project';
import Nameplate from './Nameplate';


function Home() {
    

    return <div className="Home">
        <Nameplate />
        
        <div id="gallery">
          <a href="/restaurant">
          <Project
            id="restaurant"
            title="Mexican Restaurant"
          />
          </a>
          <a href="/business">
          <Project
            id="business"
            title="Zachman Brothers"
          />
          </a>
          <a href="/blog">
            <Project
            id="blog"
            title="Sports Blog"
          />
          </a>
          
          </div>
    </div>
}

export default Home;