import React from "react";
import './style.css';
import backgroundImg from '../../assets/images/textured.jpg';

export default function Footer() {
    return (
        <footer className="footer" style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="footer-container text-center">
                <a href="https://github.com/Karina5151" target="_blank" rel="noreferrer">
                    My Github Page
                </a>
                <a href="https://www.linkedin.com/in/karina-clausen-5049aaa9/" target="_blank" rel="noreferrer">
                    My LinkedIn Page
                </a>
            </div>
        </footer>
    );
}