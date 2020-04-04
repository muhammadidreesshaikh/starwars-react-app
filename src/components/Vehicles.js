import React from 'react';
import '../assets/css/vehicles.css';
import image2 from '../assets/img/f2.jpeg';
import image3 from '../assets/img/f3.jpeg';
import image4 from '../assets/img/f4.webp';
import image5 from '../assets/img/f5.webp';
import image6 from '../assets/img/f6.jpeg';


function Vehicles() {
    return(
        <div>
            <div className="vehicles">
               <div className="container">
                   <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h3>Vehicles</h3>
                            <div className="seprator"></div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 px-0">
                            <div className="movie">
                                <div className="row">

                                    <div className="col-sm-7 col-md-7 col-lg-7">
                                        <div className="name">
                                            <h4>SOLO: A STAR WARS STORY</h4>
                                            <p>Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story, an all-new adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga’s most unlikely heroes.</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-5 col-md-5 col-lg-5">
                                        <div className="img1">
                                            <img src={image2} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 px-0">
                            <div className="movie">
                                <div className="row">

                                    <div className="col-sm-7 col-md-7 col-lg-7">
                                        <div className="name">
                                            <h4>STAR WARS: THE LAST JEDI</h4>
                                            <p>Rey has found the legendary Luke Skywalker, hoping to be trained in the ways of the Force. Meanwhile, the First Order seeks to destroy the remnants of the Resistance and rule the galaxy unopposed.</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-5 col-md-5 col-lg-5">
                                        <div className="img1">
                                            <img src={image3} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>    

                        <div className="col-sm-12 col-md-12 col-lg-12 px-0">
                            <div className="movie">
                                <div className="row">

                                    <div className="col-sm-7 col-md-7 col-lg-7">
                                        <div className="name">
                                            <h4>ROGUE ONE: A STAR WARS STORY</h4>
                                            <p>From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure. In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s ultimate weapon of destruction. This key event in the Star Wars timeline brings together ordinary people who choose to do extraordinary things, and in doing so, become part of something greater than themselves.</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-5 col-md-5 col-lg-5">
                                        <div className="img1">
                                            <img src={image4} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>    

                        <div className="col-sm-12 col-md-12 col-lg-12 px-0">
                            <div className="movie">
                                <div className="row">

                                    <div className="col-sm-7 col-md-7 col-lg-7">
                                        <div className="name">
                                            <h4>STAR WARS: THE FORCE AWAKENS</h4>
                                            <p>Thirty years after the Battle of Endor, a new threat has risen in the form of the First Order and the villainous Kylo Ren. Meanwhile, Rey, a young scavenger, discovers powers that will change her life -- and possibly save the galaxy.</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-5 col-md-5 col-lg-5">
                                        <div className="img1">
                                            <img src={image5} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>    

                        <div className="col-sm-12 col-md-12 col-lg-12 px-0">
                            <div className="movie">
                                <div className="row">

                                    <div className="col-sm-7 col-md-7 col-lg-7">
                                        <div className="name">
                                            <h4>STAR WARS: RETURN OF THE JEDI</h4>
                                            <p>Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-5 col-md-5 col-lg-5">
                                        <div className="img1">
                                            <img src={image6} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div> 

                   </div>
               </div>
            </div>
        </div>

    );
}
export default Vehicles;