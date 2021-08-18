import React from "react";
// import Body from './components/body';
// import Bio from './components/pages/Bio';
// import Portfolio from './components/pages/Portfolio';
// import Resume from './components/pages/Resume';
// import Contact from './components/pages/Contact';

export default function HeaderNav() {
    return (
        <header className="header">
            <h1>Karina Clausen</h1>

            <nav>
                <ul className="nav nav-list justify-content-center">

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