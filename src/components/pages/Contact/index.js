import './style.css';
import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';


export default function Contact() {
    return (
        <div className="card contactContainer justify-content-center">
            <h2 className="title"> Contact me! </h2>
            <div className="card-body">

                <p className="skill">Email: <a href="mailto:karina.clausen.11@gmail.com" target="_blank" rel="noreferrer">karina.clausen.11@gmail.com</a></p>
                
                <p className="contact">Cell: (952) 220 - 7395</p>

            </div>
        </div>
    );

}