import React from 'react';

const Navbar = () => {

    const redirect = () => {
        window.location.replace('https://github.com/ScarletSpidey/Rev_SegmentationFault')
    }

   return(
    <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
                <svg className="w-10 h-10 p-2 text-white bg-blue-700 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>

                <span className="ml-3 text-xl text-white">FIU Dashboard</span>
            </a>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                
            </nav>
            <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 round focus:outline-none hover:bg-gray-300 rounded-lg text-base mt-4 md:mt-0" onClick={redirect}>Github
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            </button>
        </div>
    </header>


    );
};

export default Navbar