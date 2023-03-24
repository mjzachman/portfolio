import '../styles/Home.css';
import Project from './Project';
import Nameplate from './Nameplate';


function Home() {
    

    return <div className="Home">
        <Nameplate />
        <div id="gallery">
          <Project
            id="restaurant"
            title="Mexican Restaurant"
          />
          <Project
            id="business"
            title="Zachman Brothers"
          />
          <Project
            id="blog"
            title="Sports Blog"
          />
          </div>
    </div>
}

export default Home;