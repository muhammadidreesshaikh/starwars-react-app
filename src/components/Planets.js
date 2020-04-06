import React from 'react';
import '../assets/css/planets.css';

import image0 from '../assets/img/p1.webp';
import image1 from '../assets/img/p2.jpeg';
import image2 from '../assets/img/p3.webp';
import image3 from '../assets/img/p4.webp';
import image4 from '../assets/img/p5.webp';
import image5 from '../assets/img/p6.webp';
import image6 from '../assets/img/p7.jpeg';
import image7 from '../assets/img/p8.webp';

// array
let planetsData = [
    {
        image: 'https://images.wallpapersden.com/image/wxl-black-widow-in-avengers-endgame_64416.jpg',
        heading: 'FIRST ORDER JET TROOPERS',
        text: 'Specialized stormtroopers of the First Order, jet troopers soar into battle'
    },
    {
        image: 'https://images.wallpapersden.com/image/wxl-black-widow-in-avengers-endgame_64416.jpg',
        heading: 'SECOND ORDER JET TROOPERS',
        text: 'Specialized stormtroopers of the First Order, jet troopers soar into battle'
    },
    {
        image: 'https://images.wallpapersden.com/image/wxl-black-widow-in-avengers-endgame_64416.jpg',
        heading: 'THIRD ORDER JET TROOPERS',
        text: 'Specialized stormtroopers of the First Order, jet troopers soar into battle'
    },
    {
        image: 'https://images.wallpapersden.com/image/wxl-black-widow-in-avengers-endgame_64416.jpg',
        heading: 'FOURTH ORDER JET TROOPERS',
        text: 'Specialized stormtroopers of the First Order, jet troopers soar into battle'
    }
]

function Planets() {
    return(
        <div>
            <div className="planets">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h3>Planets</h3>
                            <div className="seprator"></div>
                        </div>

                        {
                            planetsData.map(
                                (planet, i) => {
                                    return(
                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                            <div className="wrapper1">
                                                <div className="img2">
                                                    <img src={planet.image} />
                                                </div>

                                                <div className= "head">
                                                    <h6>{planet.heading}</h6>
                                                    <p>{planet.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }

                    </div>

                </div>
            </div>
        </div>
    );
}
export default Planets;