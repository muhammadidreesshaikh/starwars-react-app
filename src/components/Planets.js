import React from 'react';
import '../assets/css/planets.css';
import image from '../assets/img/p1.webp';
import image1 from '../assets/img/p2.jpeg';
import image2 from '../assets/img/p3.webp';
import image3 from '../assets/img/p4.webp';
import image4 from '../assets/img/p5.webp';
import image5 from '../assets/img/p6.webp';
import image6 from '../assets/img/p7.jpeg';
import image7 from '../assets/img/p8.webp';


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

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className="wrapper1">
                                <div className="img2">
                                    <img src= {image} />
                                </div>

                                <div className= "head">
                                    <h6>FIRST ORDER JET TROOPERS</h6>
                                    <p>Specialized stormtroopers of the First Order, jet troopers soar into battle equipped with agile rocket packs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className="wrapper1">
                                <div className="img2">
                                    <img src= {image1} />
                                </div>

                                <div className= "head">
                                    <h6>AP’LEK’S VIBRO-AX</h6>
                                    <p>Once the property of a feared Mandalorian executioner, Ap’lek’s vibro-ax is now an emblem of the Knights of Ren.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className="wrapper1">
                                <div className="img2">
                                    <img src= {image2} />
                                </div>

                                <div className= "head">
                                    <h6>FIRST ORDER JET TROOPERS</h6>
                                    <p>Specialized stormtroopers of the First Order, jet troopers soar into battle equipped with agile rocket packs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className="wrapper1">
                                <div className="img2">
                                    <img src= {image3} />
                                </div>

                                <div className= "head">
                                    <h6>SITH ETERNAL</h6>
                                    <p>On the lost world of Exegol, Sith cultists gather to venerate the ancient Sith Order and swear fealty to the current Sith Lord.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className="wrapper1">
                                <div className="img2">
                                    <img src= {image4} />
                                </div>

                                <div className= "head">
                                    <h6>FORCE HEALING</h6>
                                    <p>Exploring the Jedi texts, Rey discovers descriptions of Jedi healing techniques, which she instinctively uses to aid a vexis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className="wrapper1">
                                <div className="img2">
                                    <img src= {image5} />
                                </div>

                                <div className= "head">
                                    <h6>LANDO’S PROD PISTOL</h6>
                                    <p>Supreme Leader Kylo Ren speeds into battle aboard a TIE whisper modified to his exacting specification.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className="wrapper1">
                                <div className="img2">
                                    <img src= {image6} />
                                </div>

                                <div className= "head">
                                    <h6>ADMIRAL GRISS</h6>
                                    <p>A veteran Frantis Griss commands the Steadfast and its battlegroup and sits on the Supreme Council.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className="wrapper1">
                                <div className="img2">
                                    <img src= {image7} />
                                </div>

                                <div className= "head">
                                    <h6>NAMBI GHIMA</h6>
                                    <p>A young Aki-Aki girl, Nambi Ghima greets Rey at the Festival of Ancestors on Pasaana, offering a husk necklace as a gesture of welcome and inviting Rey to share her family history.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
export default Planets;