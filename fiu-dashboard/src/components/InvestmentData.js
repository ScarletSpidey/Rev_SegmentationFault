import  React, { Component } from 'react'

class InvestmentData extends Component{
    render(){
        return(
                <div className="p-4 w-1/3">
                    <div className="h-full w-full bg-gray-800 px-8 pt-8 pb-12 rounded-lg relative text-center">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                            Details
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                            Investment Data
                        </h1>
                        <div className="">
                            <span className="text-white text-xl font-medium mb-6">
                                No of Investments : <span className="font-bold text-white-500" > 3 </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Invested Amount : <span className="font-bold text-green-500" > ₹1,20,500 </span>
                            </span>
                            
                        </div>
                    </div>

                </div>
        )
    }
}

export default InvestmentData