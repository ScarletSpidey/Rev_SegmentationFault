import  React, { Component } from 'react'

class FinancialData extends Component{
    render(){
        return(
                <div className="p-4 w-1/3">
                    <div className="h-full w-full bg-gray-800 px-8 pt-8 pb-12 rounded-lg relative text-center">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                            Details
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                            Financial Data
                        </h1>
                        <div className="">
                            <span className="text-white text-xl font-medium mb-6">
                                Fixed Deposit : <span className="font-bold text-green-500" > ₹43500 </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Recurring Deposit : <span className="font-bold text-green-500" > ₹57500 </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Average Credit/pm : <span className="font-bold text-red-500" > ₹14500 </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Current Balance : <span className="text-green-600 font-bold" > ₹130000 </span>
                            </span>
                            <br />
                        </div>
                    </div>

                </div>
        )
    }
}

export default FinancialData