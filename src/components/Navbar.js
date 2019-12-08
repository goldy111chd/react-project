import React from 'react';
import{Link}from 'react-router-dom'

function Navbar() {

  const Logout =()=> {
    localStorage.clear();
    window.location.href = '/';
}
  return (
    <header class="header_area">
            <div class="main_menu">
            	<nav class="navbar navbar-expand-lg navbar-light">
					<div class="container box_1620">
						
						<a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /></a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						
						<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav ml-auto">
								<li class="nav-item active"><Link  to="/">Home</Link></li> 
								{/* <li class="nav-item"><Link  to="/About">Our Story</Link></li> */}
								<li class="nav-item"><Link to="/Apidatashow">ACCOMODATION</Link></li>
								<li class="nav-item"><Link to="/gallery">GALLERY</Link></li>
								<li class="nav-item submenu dropdown">
									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="bridesmaid.html">Bridesmaid</a></li>
										<li class="nav-item"><a class="nav-link" href="groomsmen.html">Groomsmen</a></li>
										<li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
									</ul>
								</li> 
								<li class="nav-item submenu dropdown">
									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
										<li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
									</ul>
								</li> 
								<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                <li> <Link to="/Login">Login</Link></li>
                <li><Link  onClick={Logout} to="/about">Logout</Link></li>
							</ul>
							<ul class="nav navbar-nav navbar-right">
								<li class="nav-item"><a href="#" class="search"><i class="lnr lnr-magnifier"></i></a></li>
							</ul>
						</div> 
					</div>
            	</nav>
           
			</div>
        </header>
  );
}
export default Navbar;

