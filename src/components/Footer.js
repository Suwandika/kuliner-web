import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white px-4 py-8 md:px-10 md:py-12 flex flex-col items-center bg-green">
            <div className="text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} Akidnafood. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
