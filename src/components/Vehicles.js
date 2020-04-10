import React from 'react';
import '../assets/css/vehicles.css';

import image2 from '../assets/img/f2.jpeg';

import axios from 'axios';

class Vehicles extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            vehiclesData: []
        };
    }

    componentDidMount() {
        const url = "https://5e9044022810f4001648acfb.mockapi.io/api/v1/vehicles";

        axios.get(url).then(responce => {
            console.log(responce);

            // getting array from responce 
            let vehicles = responce.data;
            
            // setting the planets state with api responce 
            this.setState({
                vehiclesData: vehicles
            });
        })
    }

    render() {
        return(
            <div>
                <div className="vehicles">
                   <div className="container">
                       <div className="row">
    
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3>Vehicles</h3>
                                <div className="seprator"></div>
                            </div>
    
                            {
                                this.state.vehiclesData.map(
                                    (vehicles, i) => {
                                        return(
                                            <div className="col-sm-12 col-md-12 col-lg-12 px-0" key={i}>
                                                <div className="movie">
                                                    <div className="row">
    
                                                        <div className="col-sm-7 col-md-7 col-lg-7">
                                                            <div className="name">
                                                                <h4> {vehicles.heading} </h4>
                                                                <p>{vehicles.text}</p>
                                                            </div>
                                                        </div>
    
                                                        <div className="col-sm-5 col-md-5 col-lg-5">
                                                            <div className="img1">
                                                                <img src={vehicles.avatar} />
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
export default Vehicles;