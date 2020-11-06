import React from "react";

import LoanOfferCard from '../components/LoanOfferCard'
import AddRemoveLoans from '../components/AddRemoveLoans'
import LoanRequests from '../components/LoanRequests'

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);

  
  return (
    <>
        <div className="flex flex-wrap">
                <div className="w-full">
                <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
                >
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                        className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 1
                            ? "text-white bg-" + color + "-700"
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
                        Your Loan Offers
                    </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                        className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 2
                            ? "text-white bg-" + color + "-700"
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
                </ul>
                
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded-lg ">
                    <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                            <div className="text-gray-500 bg-gray-900 body-font">
                                <AddRemoveLoans />
                                <div className="container px-5 py-12 mx-auto">
                                    <div className="">
                                        <center>
                                            <LoanOfferCard type="Buisness" amount={10000} duration={6} id="1001" interest={10} />
                                            <LoanOfferCard type="Buisness" amount={10000} duration={6} id="1001" interest={10} />
                                            <LoanOfferCard type="Buisness" amount={10000} duration={6} id="1001" interest={10} />
                                        </center>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <section className="text-gray-500 body-font bg-gray-900">
                                <div className="container px-5 py-2 mx-auto">
                                    <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                                        List of Loan Request ({1}) :
                                    </h1>
                                    </div>
                                </div>
                                <LoanRequests name="John Doe" aaid="9791130165@onemoney" loanid="1001" loanAmount={60000} requestid="1001"/>
                                
                            </section>                            
                        </div>
                       
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </>
  );
};

export default function MainLayout() {
  return (
    <>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <h2 className="text-3xl text-white pb-1 font-bold">
                    Dashboard
                </h2> 
                <div className="container">
                    <Tabs color="blue" />
                </div>
            </div>
    </>
  );
}