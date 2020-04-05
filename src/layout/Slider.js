import React from 'react';
import '../assets/css/slider.css';

let heading = "Download StarWars.com's Exclusive Star Wars: The Rise of Skywalker Covers!";
let subHeading = "The final film in the Skywalker saga is home on 4K Ultra HD and Blu-ray. Customize your copy today!";
let link = "https://www.google.com";

function Slider() {
    return(
        <div>
            <div className="slider">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="head">
                                <h2>{heading}</h2>
                                <h6>{subHeading}</h6>

                                <div className="btn">
                                    <a href={link}>GET THEM HERE</a> 
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slider;