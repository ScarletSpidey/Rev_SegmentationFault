import React from 'react'

import {Link} from 'react-router-dom'

const LoanRequests = (props) => {
    return(
        
        <div className="flex flex-wrap -m-4 ml-12">
                    
            <div className="xl:w-1/2 md:w-1/2 p-4 ml-64">
                <div className="border border-gray-800 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                </div>
                <h2 className="text-2xl text-white font-bold title-font mb-2">
                    {props.name}
                </h2>
                <div className="">
                    <span className="text-white text-lg font-medium mb-6">
                        Request id : <span className="font-bold" > {props.requestid} </span>
                    </span>
                    <br />
                    <span className="text-white text-lg font-medium mb-6">
                        Loan id : <span className="font-bold" > {props.loanid} </span>
                    </span>
                    <br />
                    <span className="text-white text-lg font-medium mb-6">
                        Loan Amount : <span className="text-green-600 font-bold" > ₹{props.loanAmount} </span>
                    </span>
                    <br />
                    <span className="text-white text-lg font-medium mb-6">
                        Account Aggregator id : <span className="font-bold text-yellow-600" >  {props.aaid} </span>
                    </span>
                    <br />
                    <div class="flex justify-end pt-8">
                        <Link to={`/details/${props.requestid}`}>
                            <button class="inline-flex text-white font-bold bg-blue-600 border-0 py-1 px-4 focus:outline-none hover:bg-blue-700 rounded-full text-sm">More Details</button>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LoanRequests