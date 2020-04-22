import React from 'react';
import '../assets/css/formclass.css';

class FormClass extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            name: '',
            contact: '',
            email: '',
            addres: ''
        };
    }

    getAnswer(event) {
        console.log(event.target.name)
        console.log(event.target.value)

        if (event.target.name == 'name') {
            this.setState({ name: event.target.value });
        }
        else if (event.target.name == 'contact') {
            this.setState({ contact: event.target.value });
        }
        else if (event.target.name == 'email') {
            this.setState({ email: event.target.value });
        }
        else if (event.target.name == 'addres') {
            this.setState({ addres: event.target.value });
        }

        if (this.state.name && this.state.contact && this.state.email && this.state.addres) {

        }    
    }

    oneClick(){
        console.log('muhammad idrees')
        localStorage.setItem("name", "muhammad idrees");
    }

    secondClick() {
        let name= localStorage.getItem("name");
        console.log(name)
    }


    formSubmit() {
        if (this.state.name && this.state.contact && this.state.email && this.state.addres) {
            console.log(this.state);
            this.setState({ submitted: true })
        }
        else {
            alert('Do not leave form empty')
        }
    }


    render() {
        return(
            <div>
    
                <div className="formclass">
                    <div className="container">
                        <div className="row">
    
                            <div className="col-md-12">
                                <input type="text" name="name" placeholder="Your Name Here" onChange={(event) => {this.getAnswer(event)}}/>
                            </div>
    
                            <div className="col-md-12">
                                <input type="text" name="contact" placeholder="Contact" onChange={(event) => {this.getAnswer(event)}}/>
                            </div>
    
                            <div className="col-md-12">
                                <input type="text" name="email" placeholder="Email"  onChange={(event) => {this.getAnswer(event)}}/>
                            </div>
    
                            <div className="col-md-12">
                                <input type="text" name="addres" placeholder="Addres"  onChange={(event) => {this.getAnswer(event)}}/>
                            </div>
    
                        </div>
                    </div>
    
                    <div className="button5">
                        <button onClick={ () => {this.formSubmit()} } disabled={!this.state.name && !this.state.contact && !this.state.email && !this.state.addres} > Send Message </button>
                    </div>

                    <button onClick={ () => {this.oneClick()}} > setItem </button>

                    <button onClick={ () => {this.secondClick()}} > getItem </button>
    
                </div>
    
            </div>
        );
    
    }

}

export default FormClass;