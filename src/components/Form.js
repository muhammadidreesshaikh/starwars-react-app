import React from 'react'; 
import '../assets/css/form.css';

    const getAnswer = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
    }

function Form() {
    return(
        <div>

            <div className="form">
                <div className="container">
                    <div className="row">

                        <div class="col-md-12">
                            <input type="text" name="name" placeholder="Your Name Here" onChange={(event) => {getAnswer(event)}}/>
                        </div>

                        <div class="col-md-12">
                            <input type="text" name="contact" placeholder="Contact" onChange={(event) => {getAnswer(event)}}/>
                        </div>

                        <div class="col-md-12">
                            <input type="text" name="email" placeholder="Email"  onChange={(event) => {getAnswer(event)}}/>
                        </div>

                        <div class="col-md-12">
                            <input type="text" name="addres" placeholder="Addres"  onChange={(event) => {getAnswer(event)}}/>
                        </div>

                    </div>
                </div>

                <div class="button5">
                    <a href="#">Send Message</a>
                </div>

            </div>

        </div>
    )

}


export default Form;
                   