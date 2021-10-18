import React from "react";
import './style.css';
import backgroundImg from '../../assets/images/textured.jpg';

export default function Footer() {
    return (
        <footer className="footer" style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="footer-container text-center">
                <p>"Love challenges, be intrigued by mistakes, enjoy effort, and keep on learning" - Carol Dweck</p>
            </div>
        </footer>
    );
}