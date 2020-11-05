import React, { Component } from 'react' 
import RequestCard from './RequestCard'

class PendingRequests extends Component{
    render(){
        return(
            <section className="text-gray-500 body-font bg-gray-900">
                <div className="container px-5 py-4 mx-auto">
                    <div className="flex flex-wrap w-full mb-2">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                        Active Requests ({1})
                        </h1>
                        <div className="h-1 w-20 bg-orange-500 rounded" />
                    </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <RequestCard bankName="Rashi Bank" loanAmount={50000} loanDuration={6} loanType="Buisness" id="1001" />
                    </div>
                </div>
            </section>

        )
    }
}

export default PendingRequests