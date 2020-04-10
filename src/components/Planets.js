import React from 'react';
import '../assets/css/planets.css';

import imagePlanet from '../assets/img/p1.webp';

import axios from 'axios';

class Planets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            planetsData: []
        };
    }

    componentDidMount() {
        const url = "https://5e9044022810f4001648acfb.mockapi.io/api/v1/planets";

        axios.get(url).then(responce => {
            console.log(responce);

            // getting array from responce 
            let planets = responce.data;
            
            // setting the planets state with api responce 
            this.setState({
                planetsData: planets
            });
        })
    }
    
    render() {
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
                                this.state.planetsData.map(
                                    (planet, i) => {
                                        return(
                                            <div className="col-sm-3 col-md-3 col-lg-3" key={i}>
                                                <div className="wrapper1">
                                                    <div className="img2">
                                                        <img src={planet.avatar} />
                                                    </div>
    
                                                    <div className= "head">
                                                        <h6>{planet.name}</h6>
                                                        <p>{planet.terrain}</p>
                                                        <p>Rotation: {planet.rotation_period}</p>
                                                        <p>Date: {Date(planet.created)}</p>
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
export default Planets;