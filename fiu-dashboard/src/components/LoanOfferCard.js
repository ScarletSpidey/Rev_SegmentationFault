import React from 'react'

const LoanOfferCard = (props) => {
    return(
            <div className="p-4 lg:w-1/2">
                <div className="h-full bg-gray-800 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-md title-font font-medium text-gray-600 mb-1">
                    CATEGORY
                </h2>
                <h1 className="title-font sm:text-3xl text-xl font-medium text-white mb-3">
                    {props.type}
                </h1>

                <div className="text-center">
                    <span className="text-white text-xl font-medium mb-6">
                        Loan id : <span className="font-bold" > {props.id} </span>
                    </span>
                    <br />
                    <span className="text-white text-xl font-medium mb-6">
                        Loan Amount : <span className="text-green-600 font-bold" > ₹{props.amount} </span>
                    </span>
                    <br />
                    <span className="text-white text-xl font-medium mb-6">
                        Loan Duration : <span className="font-bold " > {props.duration} months </span>
                    </span>
                    <br />
                    <span className="text-white text-xl font-medium mb-6">
                        Rate of interest : <span className="text-red-600 font-bold" > {props.interest}% </span>
                    </span>
                    <br />
                </div>
                
                </div>
            </div>

    )
}

export default LoanOfferCard