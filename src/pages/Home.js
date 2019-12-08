import React from 'react';
import Navbar from '../components/Navbar';

const Index=()=>{
  
	return(
		<>
    
        <section class="home_banner_area">
            <div class="banner_inner d-flex align-items-center">
            	<div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div class="container">
					<div class="banner_content text-center">
						<img src="img/banner/shap-1.png" alt="" />
						<h5>The Wedding of</h5>
						<h3>James & Julie</h3>
						<img src="img/banner/shap-2.png" alt="" />
					</div>
				</div>
            </div>
        </section>
         
        
        
        <section class="story_area p_120">
        	<div class="container">
        		<div class="row story_inner">
        			<div class="col-lg-4">
        				<img class="img-fluid" src="img/story/story-1.jpg" alt="" />
        			</div>
        			<div class="col-lg-4">
        				<div class="story_text">
        					<h3>Cordially Invited</h3>
        					<p>On the 13th of may, 2018 Travor james & Julia Robberts Santa Monica Rocky Beach, USA.</p>
        					<a class="main_btn" href="#">View Our Story</a>
        				</div>
        			</div>
        			<div class="col-lg-4">
        				<img class="img-fluid" src="img/story/story-2.jpg" alt="" />
        			</div>
        		</div>
        	</div>
        </section>
        <section class="timer_area">
        	<div class="container box_1620">
        		<div class="timer_inner p_120">
        			<h5>Until we getting married</h5>
        			<div id="timer" class="timer">
						<div class="timer__section days">
							<div class="timer__number"></div>
							<div class="timer__label">days</div>
						</div>
						<div class="timer__section hours">
							<div class="timer__number"></div>
							<div class="timer__label">hours</div>
						</div>
						<div class="timer__section minutes">
							<div class="timer__number"></div>
							<div class="timer__label">Minutes</div>
						</div>
						<div class="timer__section seconds">
							<div class="timer__number"></div>
							<div class="timer__label">seconds</div>
						</div>
					</div>
       				<p>are remaining</p>
        		</div>
        	</div>
        </section>
        <section class="journey_area p_120">
        	<div class="container">
				<div class="main_title">
					<h2>Our Love Journey</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
				</div>
				<div class="row journey_inner">
					<div class="col-lg-3">
						<div class="journey_image_items">
							<div class="journey_item">
								<img class="img-fluid" src="img/journey/journey-1.jpg" alt="" />
								<h4>Abbie Norman</h4>
								<p>Sister</p>
							</div>
							<div class="journey_item">
								<img class="img-fluid" src="img/journey/journey-2.jpg" alt="" />
								<h4>Bess Wolfe</h4>
								<p>Cousine</p>
							</div>
							<div class="journey_item">
								<img class="img-fluid" src="img/journey/journey-3.jpg" alt="" />
								<h4>Mathilda Moss</h4>
								<p>Neighbour</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="journey_text_items">
							<div class="journey_item">
								<h4>Love at first sight</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.</p>
							</div>
							<div class="journey_item">
								<h4>First Kissing</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.</p>
							</div>
							<div class="journey_item">
								<h4>Living Together</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.</p>
							</div>
							<div class="journey_item">
								<h4>Cherished Proposal</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="journey_image_items">
							<div class="journey_item">
								<img class="img-fluid" src="img/journey/journey-4.jpg" alt="" />
								<h4>Blake Hunter</h4>
								<p>Brother</p>
							</div>
							<div class="journey_item">
								<img class="img-fluid" src="img/journey/journey-5.jpg" alt="" />
								<h4>Norman Ramsey</h4>
								<p>Cousine</p>
							</div>
							<div class="journey_item">
								<img class="img-fluid" src="img/journey/journey-6.jpg" alt="" />
								<h4>Tommy Phillips</h4>
								<p>Neighbour</p>
							</div>
						</div>
					</div>
				</div>
        	</div>
        </section>
        
        <section class="moments_area">
        	<div class="container box_1620">
        		<div class="main_title">
        			<h2>Special Moments Captured</h2>
        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        		</div>
        		<div class="moments_inner imageGallery1">
        			<div class="gallery_item">
						<div class="h_gallery_item">
							<img src="img/moments/Image-01.jpg" alt="" />
							<div class="hover">
								<a class="light" href="img/moments/Image-01.jpg" ><i class="fa fa-expand"></i></a>
							</div>
						</div>
					</div>
        			<div class="gallery_item">
						<div class="h_gallery_item">
							<img src="img/moments/Image-02.jpg" alt="" />
							<div class="hover">
								<a class="light" href="img/moments/Image-02.jpg" ><i class="fa fa-expand"></i></a>
							</div>
						</div>
					</div>
        			<div class="gallery_item">
						<div class="h_gallery_item">
							<img src="img/moments/Image-03.jpg" alt="" />
							<div class="hover">
								<a class="light" href="img/moments/Image-03.jpg"><i class="fa fa-expand"></i></a>
							</div>
						</div>
					</div>
        			<div class="gallery_item">
						<div class="h_gallery_item">
							<img src="img/moments/Image-04.jpg" alt="" />
							<div class="hover">
								<a class="light" href="img/moments/Image-04.jpg" ><i class="fa fa-expand"></i></a>
							</div>
						</div>
					</div>
        			<div class="gallery_item">
						<div class="h_gallery_item">
							<img src="img/moments/Image-05.jpg" alt="" />
							<div class="hover">
								<a class="light" href="img/moments/Image-05.jpg" ><i class="fa fa-expand"></i></a>
							</div>
						</div>
					</div>
        			<div class="gallery_item">
						<div class="h_gallery_item">
							<img src="img/moments/Image-06.jpg" alt="" />
							<div class="hover">
								<a class="light" href="img/moments/Image-06.jpg" ><i class="fa fa-expand"></i></a>
							</div>
						</div>
					</div>
        		</div>
        	</div>
        </section>
        <section class="reservation_form_area p_120">
        	<div class="container">
        		<div class="res_form_inner">
        			<div class="form_title">
        				<h2>Reservation Form</h2>
        				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua.</p>
        			</div>
        			<form class="reservation_form row" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
						<div class="form-group col-lg-12">
							<input type="text" class="form-control" id="name" name="name" placeholder="Name" />
						</div>
						<div class="form-group col-lg-12">
							<input type="email" class="form-control" id="email" name="email" placeholder="Email address" />
						</div>
						<div class="form-group col-lg-12">
							<select class="res_select">
								<option value="1">Meal Preferences</option>
								<option value="2">Meal Preferences</option>
								<option value="4">Meal Preferences</option>
							</select>
						</div> 
						<div class="form-group col-lg-12">
							<select class="res_select">
								<option value="1">Number of guests</option>
								<option value="2">Number of guests</option>
								<option value="4">Number of guests</option>
							</select>
						</div>
						<div class="form-group col-lg-12">
							<button class="btn submit_btn" type="submit" value="submit">Confirm Now</button>
						</div>
					</form>
        		</div>
        	</div>
        </section>
       
        <section class="progress_area">
        	<div class="container box_1620">
        		<div class="main_title">
        			<h2>Arrengement in progress</h2>
        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        		</div>
        		<div class="row progress_inner">
        			<div class="col-lg-3">
        				<div class="progress_item">
        					<img class="img-fluid" src="img/progress/progress-1.png" alt="" />
        					<div class="progress_text">
        						<a href="#"><h4>Wedding Ceremony</h4></a>
        						<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.</p>
        						<div class="date">
        							<a href="#">Date:  Friday, 20 May 2018</a>
        							<a href="#">Time:  19.00</a>
        							<a href="#">Address:  Rocky Beach, Los angeles, USA</a>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-3">
        				<div class="progress_item">
        					<div class="progress_text">
        						<a href="#"><h4>Lunch Preparations</h4></a>
        						<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.</p>
        						<div class="date">
        							<a href="#">Date:  Friday, 20 May 2018</a>
        							<a href="#">Time:  19.00</a>
        							<a href="#">Address:  Rocky Beach, Los angeles, USA</a>
        						</div>
        					</div>
        					<img class="img-fluid" src="img/progress/progress-2.png" alt="" />
        				</div>
        			</div>
        			<div class="col-lg-3">
        				<div class="progress_item">
        					<img class="img-fluid" src="img/progress/progress-3.png" alt="" />
        					<div class="progress_text">
        						<a href="#"><h4>Wedding Cake Cutting</h4></a>
        						<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.</p>
        						<div class="date">
        							<a href="#">Date:  Friday, 20 May 2018</a>
        							<a href="#">Time:  19.00</a>
        							<a href="#">Address:  Rocky Beach, Los angeles, USA</a>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-3">
        				<div class="progress_item">
        					<div class="progress_text">
        						<a href="#"><h4>Wedding Party</h4></a>
        						<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.</p>
        						<div class="date">
        							<a href="#">Date:  Friday, 20 May 2018</a>
        							<a href="#">Time:  19.00</a>
        							<a href="#">Address:  Rocky Beach, Los angeles, USA</a>
        						</div>
        					</div>
        					<img class="img-fluid" src="img/progress/progress-4.png" alt="" />
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
       
        <section class="clients_logo_area p_120">
        	<div class="container">
        		<div class="main_title">
        			<h2>Gift Registry</h2>
        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        		</div>
        		<div class="clients_slider owl-carousel">
        			<div class="item">
        				<img src="img/clients-logo/c-logo-1.png" alt="" />
        			</div>
        			<div class="item">
        				<img src="img/clients-logo/c-logo-2.png" alt="" />
        			</div>
        			<div class="item">
        				<img src="img/clients-logo/c-logo-3.png" alt="" />
        			</div>
        			<div class="item">
        				<img src="img/clients-logo/c-logo-4.png" alt="" />
        			</div>
        			<div class="item">
        				<img src="img/clients-logo/c-logo-5.png" alt="" />
        			</div>
        		</div>
        	</div>
        </section>
        
        <footer class="footer_area">
        	<div class="container box_1620">
        		<div class="footer_inner p_120">
        			<img src="img/footer-logo.png" alt="" />
        			<ul class="list f_menu">
        				<li><a href="#">Home</a></li>
        				<li><a href="#">Our Story</a></li>
        				<li><a href="#">Accomodation</a></li>
        				<li><a href="#">Gallery</a></li>
        				<li><a href="#">Pages</a></li>
        				<li><a href="#">Blog</a></li>
        				<li><a href="#">Contact</a></li>
        			</ul>
        			<ul class="list f_social">
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
						<li><a href="#"><i class="fa fa-behance"></i></a></li>
					</ul>
       				<p>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Goldy</a></p>
        		</div>
        	</div>
        </footer>

		</>
	)
}
export default Index;