import './style.css';
import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        }
        else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Please enter your name')
            return
        } else if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
            return;
        } else if (!message) {
            setErrorMessage('Please enter a message')
            return
        }

        setErrorMessage('')
        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <div className="contactContainer justify-content-center">
            <h2 className="title"> Contact me! </h2>
            <br></br>
            <p>all fields required</p>

            {/* Contact Form */}
            <form className="contactForm justify-content-center">

                {/* Name Input */}
                <div className="form-group row justify-content-center">
                        <input
                            value={name}
                            className="form-name"
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Your Name"
                        />
                </div>

                {/* Email Input */}
                <div className="form-group row justify-content-center">
                        <input
                            value={email}
                            className="form-control"
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Your Email"
                        />
                </div>
                
                {/* Message Input */}
                <div className="form-group row justify-content-center">
                        <input
                            value={message}
                            className="form-control message"
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Your Message"
                        />
                </div>
                
                {/* Submit Button */}
                <div className="form-group row justify-content-center">
                    <div className="col-sm-10">
                        <button
                            className="btn btn-primary"
                            onClick={handleFormSubmit}
                            type="button">
                            Submit
                        </button>
                    </div>
                </div>

            </form>
<br></br>
            {/* Error Message */}
            {errorMessage && (
                <div>
                    <h5 className="errorText">{errorMessage}</h5>
                </div>
            )}
        </div>
    );

}