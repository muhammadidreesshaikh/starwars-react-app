import React from 'react';
import '../assets/css/films.css';

import image from '../assets/img/f1.webp';

import axios from 'axios';

class Films extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            filmsData: []
        };
    }

    componentDidMount() {
        const url = "https://5e9044022810f4001648acfb.mockapi.io/api/v1/spaceship";

        axios.get(url).then(responce => {
            console.log(responce);

            // getting array from responce 
            let films = responce.data;
            
            // setting the planets state with api responce 
            this.setState({
                filmsData: films
            });
        })
    }

    render() {
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
                                this.state.filmsData.map(
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
    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Films;