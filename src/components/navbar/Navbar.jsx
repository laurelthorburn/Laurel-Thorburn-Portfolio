import './navbar.css';
import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="nav">
        <div className="nav-left">
            <h1 className="navName"><span className="bigL">L</span>aurel</h1>
        </div>
        <div className="nav-right">
            <span className='navItems'>
                <span>
                    <a
                    href="#intro"
                    onClick={() => handlePageChange('Intro')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Intro"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === 'Intro' ? 'nav-link active currentLink' : 'nav-link'}
                    >
                    About Me
                    </a>
                </span>
                <span>
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Contact' ? 'nav-link active currentLink' : 'nav-link'}
                    >
                    Contact
                    </a>
                </span>
                <span>
                    <a
                    href="#projectList"
                    onClick={() => handlePageChange('ProjectList')}
                    // Check to see if the currentPage is `ProjectList`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'ProjectList' ? 'nav-link active currentLink' : 'nav-link'}
                    >
                    Projects
                    </a>
                </span>
                <span>
                    <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    // Check to see if the currentPage is `ProjectList`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Resume' ? 'nav-link active currentLink' : 'nav-link'}
                    >
                    Resume
                    </a>
                </span>
            </span>
        </div>
    </nav>
  );
}

export default Navbar;

