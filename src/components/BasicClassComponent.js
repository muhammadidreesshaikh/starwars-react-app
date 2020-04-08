import React from 'react';
import '../assets/css/basic-functional.css';

class BasicClassComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    }

    componentDidMount() {
        console.log("BasicClassComponent");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <p>BasicFunctional</p>
            </div>
        );
    }
}
export default BasicClassComponent;