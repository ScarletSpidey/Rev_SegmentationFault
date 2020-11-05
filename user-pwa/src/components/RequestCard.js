import React from 'react'

const RequestCard = (props) =>{
    return(
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 p-6 rounded-lg">
            <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="content"
            />
            <h3 className="tracking-widest text-orange-500 text-xs font-medium title-font">
                LOAN OFFER
            </h3>
            <h2 className="text-lg text-white font-medium title-font mb-1">
                {props.bankName}
            </h2>
            <div className="justify-start">
                  <span className="text-sm pb-2 text-white">
                  Loan Amount : <span className="text-sm font-bold text-green-500">{"₹"+props.loanAmount}</span>
                  </span>
                
                  <br />
                  <span className=" text-sm pb-2 text-white">
                      Type : <span className="font-bold text-white">{props.loanType}</span>
                  </span>
                  <br />
                  <span className="text-sm pb-2 text-white">
                      Duration : <span className="font-bold text-white">{props.loanDuration + " Months"}</span>
                  </span>
                  <br />
                  <span className="text-sm pb-2 text-white">
                      Status : <span className="font-bold text-orange-500">Pending</span>
                  </span>
                </div>
            </div>
        </div>
    )
}

export default RequestCard