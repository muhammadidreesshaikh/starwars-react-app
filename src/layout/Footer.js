import React from 'react';
import '../assets/css/footer.css';

function Footer(){
    return(
      <div>
          <div className="footer" >
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-sm-12 col-md-12 col-lg-12">

                        <h6>FOLLOW STAR WARS:</h6>

                        <div className="icon">
                            <i class="fab fa-facebook-f"></i> 
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-youtube"></i>   
                        </div>

                        <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>

                        <div className="btn2">
                            <a href="#">Terms of Use</a>
                            <a href="#"> Additional Content Information</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Terms of Use</a>

                        </div>

                    </div>

                </div>
            </div>
          </div>
      </div>  
    );
}
export default Footer;