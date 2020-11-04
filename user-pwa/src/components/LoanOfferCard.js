import React from 'react'

import { Link } from 'react-router-dom'

const ReturnLogo = (BankName) => {
    if(BankName === "Rashi Bank"){
        return(
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        )
    }
    if(BankName === "Premium Bank Corp."){
        return(
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle cx={6} cy={6} r={3} />
              <circle cx={6} cy={18} r={3} />
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
            </svg>
        )
    }
    if(BankName === "New Wealth Trust"){
        return(
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
        )
    }
    if(BankName === "IDIDI Bank"){
        return(
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
            </svg>
        )
    }

    
}

const LoanOfferCard = (props) => {
    return(
        <div className="xl:w-1/3 md:w-1/2 w-full p-4">
            <div className="border border-gray-800 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-orange-400 mb-4">
                    {ReturnLogo(props.bankName)}
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                    {props.bankName}
                </h2>
                <span className="text-md">
                    Loan Amount : <span className="font-bold text-green-500">{"₹"+props.loanAmount}</span>
                </span>
                <br />
                <div className="flex">
                    <span className="w-3/7 text-md">
                        Type : <span className="font-bold text-white">{props.loanType}</span>
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="w-4/7 text-md">
                        Duration : <span className="font-bold text-white">{props.loanDuration + " Months"}</span>
                    </span>
                </div>
                <div>
                    <div className="flex justify-end pt-10">
                        <Link to={`app/loan/${props.id}`}>
                            <button className="inline-flex text-white bg-orange-500 border-0 py-1 px-4 focus:outline-none hover:bg-orange-600 rounded-full text-sm">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanOfferCard