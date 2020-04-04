import React from 'react';
import '../assets/css/people.css';
import image4 from '../assets/img/f4.webp';
import image5 from '../assets/img/f5.webp';
import image6 from '../assets/img/f6.jpeg';
import image7 from '../assets/img/f7.jpeg';

function People() {
    return(
        <div>
            <div className="people">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h3>People</h3>
                            <div className="seprator"></div>
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

                        <div className="col-sm-12 col-md-12 col-lg-12 px-0">
                            <div className="movie">
                                <div className="row">

                                    <div className="col-sm-7 col-md-7 col-lg-7">
                                        <div className="name">
                                            <h4>STAR WARS: THE EMPIRE STRIKES BACK</h4>
                                            <p>While the Death Star has been destroyed, the battle between the Empire and the Rebel Alliance rages on...and the evil Darth Vader continues his relentless search for Luke Skywalker.</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-5 col-md-5 col-lg-5">
                                        <div className="img1">
                                            <img src={image7} />
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
export default People;