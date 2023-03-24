import '../styles/Home.css';

function Home() {
    

    return <div>
            <div id="nameplate">
          <h1>Matthew Zachman</h1>
          <h3>Freelance Web Developer based in Richmond, KY</h3>
        </div>
        <div id="gallery">
          <div className="project" id="restaurant">
            <img alt="mex rest" />
            <h3>Mexican Restaurant</h3>
          </div>
          <div className="project" id="business">
          <img alt="ZB" />
            <h3>Zachman Brothers</h3>
          </div>
          <div className="project" id="blog">
          <img alt="sports" />
            <h3>Sports blog</h3>
          </div>
        </div>
    </div>
}

export default Home;