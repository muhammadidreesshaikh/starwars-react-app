import React from 'react';
import '../assets/css/films.css';

import image from '../assets/img/f1.webp';
import image2 from '../assets/img/f2.jpeg';
import image3 from '../assets/img/f3.jpeg';
import image4 from '../assets/img/f4.webp';
import image5 from '../assets/img/f5.webp';
import image6 from '../assets/img/f6.jpeg';
import image7 from '../assets/img/f7.jpeg';

// arary
let FilmsData = [
    {
        heading: 'SOLO: A STAR WARS STORY',
        text: 'Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story, an all-new adventure with the most beloved scoundrel in the galaxy. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'STAR WARS: THE LAST JEDI',
        text: 'Rey has found the legendary Luke Skywalker, hoping to be trained in the ways of the Force. Meanwhile, the First Order seeks to destroy the remnants of the Resistance and rule the galaxy unopposed.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'ROGUE ONE: A STAR WARS STORY',
        text: 'From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure. In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'STAR WARS: RETURN OF THE JEDI',
        text: 'Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'SOLO: A STAR WARS STORY',
        text: 'Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story, an all-new adventure with the most beloved scoundrel in the galaxy. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'STAR WARS: THE LAST JEDI',
        text: 'Rey has found the legendary Luke Skywalker, hoping to be trained in the ways of the Force. Meanwhile, the First Order seeks to destroy the remnants of the Resistance and rule the galaxy unopposed.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
        heading: 'ROGUE ONE: A STAR WARS STORY',
        text: 'From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    }
]  

    const ChangeColor= (event) => {
        console.log(event.target.name);

        let color = event.target.name;
        document.getElementById("colorfull").style.color = color;
        
    }



function Films() {
    return(
        <div>
            <div className="films">
                <div className="container">
                    <div className="row">


                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h3>Films</h3>
                            <div className="seprator"></div>
                        </div>

                        {
                            FilmsData.map(
                                (film, i)=> {
                                    return(
                                        <div className="col-sm-12 col-md-12 col-lg-12 px-0"key={i}>
                                            <div className="movie">
                                                <div className="row">
                
                                                    <div className="col-sm-7 col-md-7 col-lg-7">
                                                        <div className="name">
                                                            <h4> {film.heading} </h4>
                                                            <p>{film.text}</p>
                                                        </div>
                                                    </div>
                
                                                    <div className="col-sm-5 col-md-5 col-lg-5">
                                                        <div className="img1">
                                                            <img src={film.image} />
                                                        </div>
                                                    </div>
                
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }

                        <div className="col-md-12">
                            <div className="buttons">

                                <a name="blue" className="btn btn-primary" onClick={(event)=>{ChangeColor(event)}} >Blue</a>

                                <a name="red" className="btn btn-danger" onClick={(event)=>{ChangeColor(event)}} >Red</a>

                                <a name="cyan" className="btn btn-info" onClick={(event)=>{ChangeColor(event)}} >Cyan</a>

                                <a name="green" className="btn btn-success" onClick={(event)=>{ChangeColor(event)}} >Green</a>

                                <a name="orange" className="btn btn-warning" onClick={(event)=>{ChangeColor(event)}} >Orange</a>
                            </div>

                            <h4 id="colorfull" >Submitted</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}



export default Films;