import React, { Component } from 'react' 

import LoanOfferCard from './LoanOfferCard'

class LoanOffers extends Component{
    render(){
        return(
            <div>
                <section className="text-gray-500 bg-gray-900 body-font px-5">
                    <div className="container px-5 pb-12 pt-10 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-white">Loan Offers</h1>
                            <div className="w-12 h-1 bg-orange-500 rounded mt-2" />
                        </div>    
                    </div>

                    <div className="flex flex-wrap -m-4">
                        <LoanOfferCard />
                        <LoanOfferCard />
                        <LoanOfferCard />
                        <LoanOfferCard />
                        <LoanOfferCard />
                        <LoanOfferCard />
                        <LoanOfferCard />
                        <LoanOfferCard />
                        <LoanOfferCard />
                        <LoanOfferCard />

                    </div>

                </section>
            </div>
        )
    }
}

export default LoanOffers