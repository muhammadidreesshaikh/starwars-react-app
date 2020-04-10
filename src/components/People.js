import React from 'react';
import '../assets/css/people.css';

import image4 from '../assets/img/f4.webp';

import axios from 'axios';

class People extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            peopleData: []
        };
    }

    componentDidMount() {
        const url = "https://5e9044022810f4001648acfb.mockapi.io/api/v1/people";

        axios.get(url).then(responce => {
            console.log(responce);

            // getting array from responce 
            let people = responce.data;
            
            // setting the planets state with api responce 
            this.setState({
                peopleData: people
            });
        })
    }

    render() {
        return( 
            <div>
                <div className="people">
                    <div className="container">
                        <div className="row">
    
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3>People</h3>
                                <div className="seprator"></div>
                            </div>
    
                            {
                                this.state.peopleData.map(
                                    (people, i) => {
                                        return(
                                            <div className="col-sm-12 col-md-12 col-lg-12 px-0" key={i}>
                                                <div className="movie">
                                                    <div className="row">
    
                                                        <div className="col-sm-7 col-md-7 col-lg-7">
                                                            <div className="name">
                                                                <h4> {people.heading} </h4>
                                                                <p> {people.text} </p>
                                                            </div>
                                                        </div>
    
                                                        <div className="col-sm-5 col-md-5 col-lg-5">
                                                            <div className="img1">
                                                                <img src={people.avatar} />
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
export default People;