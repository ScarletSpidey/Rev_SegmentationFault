import React from 'react'

import LoanOffers from '../components/LoanOffers'
import PendingRequests from '../components/PendingRequests'
import Profile from '../components/Profile'


const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
  
    
    return (
      <>

        <header className="text-gray-500 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white md:mb-0" href="/app">
                  <svg className="w-10 h-10 text-white p-2 bg-orange-500 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                <span className="ml-3 text-xl">Samriddhi</span>
                </a>
            </div>
        </header>

        <div className="flex flex-wrap">
          <div className="w-full"> 
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded-lg ">
              <div className="px-4  pt-2 pb-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
  
                    <LoanOffers />                                
                    
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
  
                   <PendingRequests />
  
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    
                    <Profile />

                  </div>
                </div>
              </div>
            </div>

            <div style={{
                    position: 'fixed',
                    left: '0',
                    bottom: '0',
                    width: '100%',
                    backgroundColor: '#1a202c'
            }}>
                <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-5 flex-row px-3"
                    role="tablist"
                    >
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                        className={
                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block  leading-normal " +
                            (openTab === 1
                            ? "text-white bg-" + color + "-500"
                            : "text-white bg-gray-800")
                        }
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                        >
                            Offers
                        </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                        className={
                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal " +
                            (openTab === 2
                            ? "text-white bg-" + color + "-500"
                            : "text-white bg-gray-800")
                        }
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                        >
                         Requests
                        </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                        className={
                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal " +
                            (openTab === 3
                            ? "text-white bg-" + color + "-500"
                            : "text-white bg-gray-800")
                        }
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                        >
                            Profile 
                        </a>
                    </li>
                    </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default function MainLayout() {
    return (
      <>
        <div className="container">
          <Tabs color="orange" />
        </div>
        
      </>
    );
  }