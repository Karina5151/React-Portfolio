import { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import Bio from './components/pages/Bio';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
// import Footer from './components/Footer';

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
            <div>
                <HeaderNav currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </>
    )
}