import React from 'react';
import '../assets/css/spaceships.css';

import imageSpaceship from '../assets/img/p1.webp';

import axios from 'axios';

class Spaceships extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            spaceshipsData: []
        };
    }

    componentDidMount() {
        const url = "https://5e9044022810f4001648acfb.mockapi.io/api/v1/spaceship";

        axios.get(url).then(responce => {
            console.log(responce);

            // getting array from responce 
            let spaceships = responce.data;
            
            // setting the planets state with api responce 
            this.setState({
                spaceshipsData: spaceships
            });
        })
    }

    render() {
        return(
            <div>
                <div className="spaceships">
                   <div className="container">
                       <div className="row">
                            
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3>Spaceships</h3>
                                <div className="seprator"></div>
                            </div>
    
                            {
                                 this.state.spaceshipsData.map(
                                    (spaceship, i) => {
                                        return(
                                            <div className="col-sm-12 col-md-12 col-lg-12 px-0" key={i}>
                                                <div className="movie">
                                                    <div className="row">
    
                                                        <div className="col-sm-7 col-md-7 col-lg-7">
                                                            <div className="name">
                                                                <h4>{spaceship.title}</h4>
                                                                <p>{spaceship.description}</p>
                                                            </div>
                                                        </div>
    
                                                        <div className="col-sm-5 col-md-5 col-lg-5">
                                                            <div className="img1">
                                                                <img src={spaceship.avatar} />
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



export default Spaceships;
