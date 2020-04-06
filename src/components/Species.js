import React from 'react';
import '../assets/css/species.css';
import image from '../assets/img/f1.webp';
import image2 from '../assets/img/f2.jpeg';
import image3 from '../assets/img/f3.jpeg';
import image4 from '../assets/img/f4.webp';
import image5 from '../assets/img/f5.webp';
import image6 from '../assets/img/f6.jpeg';
import image7 from '../assets/img/f7.jpeg';

// arary
let SpeciesData = [
    {
        heading: 'SOLO: A STAR WARS STORY',
        text: 'Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story, an all-new adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga’s most unlikely heroes.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'STAR WARS: THE LAST JEDI',
        text: 'Rey has found the legendary Luke Skywalker, hoping to be trained in the ways of the Force. Meanwhile, the First Order seeks to destroy the remnants of the Resistance and rule the galaxy unopposed.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'ROGUE ONE: A STAR WARS STORY',
        text: 'From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure. In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s ultimate weapon of destruction. This key event in the Star Wars timeline brings together ordinary people who choose to do extraordinary things, and in doing so, become part of something greater than themselves.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'STAR WARS: RETURN OF THE JEDI',
        text: 'Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'SOLO: A STAR WARS STORY',
        text: 'Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story, an all-new adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga’s most unlikely heroes.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'STAR WARS: THE LAST JEDI',
        text: 'Rey has found the legendary Luke Skywalker, hoping to be trained in the ways of the Force. Meanwhile, the First Order seeks to destroy the remnants of the Resistance and rule the galaxy unopposed.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'ROGUE ONE: A STAR WARS STORY',
        text: 'From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure. In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s ultimate weapon of destruction. This key event in the Star Wars timeline brings together ordinary people who choose to do extraordinary things, and in doing so, become part of something greater than themselves.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    }
]


function Species() {
    return(
        <div>
            <div className="species">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h3>Species</h3>
                            <div className="seprator"></div>
                        </div>

                        {
                            SpeciesData.map(
                                (specie, i) => {
                                    return(
                                        <div className="col-sm-12 col-md-12 col-lg-12 px-0">
                                            <div className="movie">
                                                <div className="row">

                                                    <div className="col-sm-7 col-md-7 col-lg-7">
                                                        <div className="name">
                                                            <h4> {specie.heading} </h4>
                                                            <p>{specie.text}</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-5 col-md-5 col-lg-5">
                                                        <div className="img1">
                                                            <img src={specie.image} />
                                                        </div>
                                                    </div>

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
export default Species;