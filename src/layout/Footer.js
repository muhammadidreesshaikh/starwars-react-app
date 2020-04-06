import React from 'react';
import '../assets/css/footer.css';

function Footer(){
    return(
      <div>
          <div className="footer" >
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="bttom">
                            <h6>FOLLOW STAR WARS:</h6>

                            {/* <div className="icon">
                                <i class="fab fa-facebook-f"></i> 
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-youtube"></i>   
                            </div> */}

                            <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
                        </div>
                    </div>    

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="btn2">
                           <ul>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#"> Additional Content Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Children’s Online Privacy Policy</a></li>
                                <li><a href="#">Your California Privacy Rights</a></li>
                                <li><a href="#">Star Wars at shopDisney</a></li>
                                <li><a href="#">Star Wars Helpdesk</a></li>
                                <li><a href="#">Interest-Based Ads Do Not Sell My Info</a></li>
                           </ul>
                        </div>
                    </div>

                </div>
            </div>
          </div>
      </div>  
    );
}
export default Footer;