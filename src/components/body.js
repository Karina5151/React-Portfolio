import { useState } from 'react';
import HeaderNav from './HeaderNav';
import Bio from './pages/Bio';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function Body() {
    // make default page the Bio page
    const [currentPage, setCurrentPage] = useState('Bio');

    const renderPage = () => {
        if (currentPage === 'Bio') {
            return <Bio />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Bio />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <div style={{ minHeight: "calc(100vh - 200px)" }}>
                <HeaderNav
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />
                {renderPage()}

            </div>
        </>
    );
}