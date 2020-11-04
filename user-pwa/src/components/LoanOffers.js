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

                    <div className="flex flex-wrap -m-4 mb-6">
                        <LoanOfferCard bankName="Rashi Bank" loanAmount={50000} loanDuration={6} loanType="Buisness" id="1001" />
                        <LoanOfferCard bankName="Premium Bank Corp." loanAmount={30000} loanDuration={4} loanType="Personal" id="1002" />
                        <LoanOfferCard bankName="New Wealth Trust" loanAmount={10000} loanDuration={1} loanType="Buisness" id="1003" />
                        <LoanOfferCard bankName="IDIDI Bank" loanAmount={5000} loanDuration={1} loanType="Personal" id="1004" />  
                        <LoanOfferCard bankName="Premium Bank Corp." loanAmount={45000} loanDuration={5} loanType="Personal" id="1005" />
                        <LoanOfferCard bankName="IDIDI Bank" loanAmount={80000} loanDuration={8} loanType="Buisness" id="1006" />
                        <LoanOfferCard bankName="New Wealth Trust" loanAmount={5000} loanDuration={3} loanType="Personal" id="1007" />
                        <LoanOfferCard bankName="Rashi Bank" loanAmount={7000} loanDuration={2} loanType="Buisness" id="1008" />
                        <LoanOfferCard bankName="New Wealth Trust" loanAmount={12500} loanDuration={3} loanType="Personal" id="1009" />
                        <LoanOfferCard bankName="Premium Bank Corp." loanAmount={50000} loanDuration={12} loanType="Personal" id="1010" />

                    </div>

                </section>
            </div>
        )
    }
}

export default LoanOffers