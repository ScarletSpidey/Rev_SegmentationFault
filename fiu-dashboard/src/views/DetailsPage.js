import React from 'react'

import ProfileData from "../components/ProfileData"
import FinancialData from "../components/FinancialData"
import InvestmentData from "../components/InvestmentData"

import TransactionGraph from "../components/TransactionGraph"
import TransactionTypes from "../components/TransactionTypes"


const DetailsPage = () => {
    return(
        <section className="text-gray-500 bg-gray-900 body-font">
            <div className="container px-5 pt-12 mx-auto flex flex-wrap items-center">
                <h1 className="font-bold text-white text-3xl">Request Details:</h1>
            </div>
            <br />
            <br />
            <div className="container px-5 pt-12 mx-auto flex flex-wrap items-center">
                    
                    <ProfileData />
                    <FinancialData />
                    <InvestmentData />
                    <TransactionGraph />
                    <TransactionTypes />
            </div>
            <div class="flex justify-end mr-64 pr-32">
                <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-lg">Accept</button> &nbsp;&nbsp;&nbsp;
                <button class="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg--700 hover:text-white rounded-full text-lg">Reject</button>
            </div>
        </section>
    )
}

export default DetailsPage