import React from 'react';

const About=()=>{
  if(localStorage.token){
    
  }
  else{
    window.location.href = '/login';
  }
  return(
    <>
    <section className="section-a">
    <div className="container">
      <div>
        <h1>The headphones of the future.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
          commodi placeat ea itaque modi corrupti corporis nam voluptas aut
          reprehenderit eaque culpa.
        </p>
        <a href="/" className="btn">Read More</a>
      </div>
      <img src="https://i.ibb.co/37Y74kv/showcase.jpg" alt="" />
    </div>
  </section>

 
  <section id="about" className="section-b">
    <div className="overlay">
      <div className="section-b-inner py-5">
        <h3 className="text-2">Loud  Clear</h3>
        <h2 className="text-5 mt-1">People Aren't Hearing All the Music</h2>
        <p className="mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          repudiandae laboriosam quia, error tempore porro ducimus voluptate
          laborum nostrum iure.
        </p>
      </div>
    </div>
  </section>

  
  <section className="section-c">
    <div className="gallery">
      <a href="https://i.ibb.co/CHLBZnp/gal2323.jpg" className="big"
        ><img src="https://i.ibb.co/CHLBZnp/gal2323.jpg" alt=""
      /></a>
      <a href="https://i.ibb.co/4pBbhfY/gal39834.jpg" className="big"
        ><img src="https://i.ibb.co/4pBbhfY/gal39834.jpg" alt=""
      /></a>
      <a href="https://i.ibb.co/xSnHP7g/gal43884.jpg" className="big"
        ><img src="https://i.ibb.co/xSnHP7g/gal43884.jpg" alt=""
      /></a>
      <a href="https://i.ibb.co/QN6Bnrb/gal4958.jpg" className="big"
        ><img src="https://i.ibb.co/QN6Bnrb/gal4958.jpg" alt=""
      /></a>
      <a href="https://i.ibb.co/dGZvj75/gal4545.jpg" className="big">
        <img src="https://i.ibb.co/dGZvj75/gal4545.jpg" alt=""
      /></a>
      <a href="https://i.ibb.co/S6FVFNt/gal74744.jpg" className="big"
        ><img src="https://i.ibb.co/S6FVFNt/gal74744.jpg" alt=""
      /></a>
    </div>
  </section>

  
  <footer className="section-footer py-4 bg-primary">
    <div className="container">
      <div>
        <h2 className="text-2 mb-1">Lorem ipsum dolor sit.</h2>
        <a href="http://twitter.com">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="http://facebook.com">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="http://youtube.com">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
      <div>
        <h3>Company Info</h3>
        <ul>
         
        </ul>
      </div>
      <div>
        <h3>Blog Posts</h3>
        <ul>
          
        </ul>
      </div>
      <div>
        <h3>Subscribe</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <form className="mt-1"name="email-form"method="POST"data-netlify="true">
          <div className="email-form">
            <span className="form-control-wrap">
              <input type="email" name="email" id="email"
                size="40"className="form-control"placeholder="E-mail"/></span>
                <button type="submit" value="Submit" className="form-control submit">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </footer>
  </>
  )
}

export default About;