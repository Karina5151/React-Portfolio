import React from "react";
import './style.css';



export default function HeaderNav({ currentPage, handlePageChange }) {
    return (
        <header className="header">
            <h1 className="name-header" >Karina Clausen</h1>

            <nav>
                <ul className="nav nav-list justify-content-end">

                    <li className="nav-item">
                        <a href="#bio"
                            onClick={() => handlePageChange('Bio')}
                            className={currentPage === 'Bio' ? 'nav-link disabled' : 'nav-link'}>
                            Bio
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link disabled' : 'nav-link'}>
                            Portfolio
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link disabled' : 'nav-link'}>
                            Resume
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link disabled' : 'nav-link'}>
                            Contact
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    )
}