import React, { Component } from 'react' 

import LoanOfferCard from './LoanOfferCard'

import {baseurl} from '../APIurl'

import axios from 'axios'
class LoanOffers extends Component{

    constructor(props)  {
        super(props)
        this.state = {
            amount :[],
            duration:[],
            id:[],
            interest:[],
            name:[],
            type:[]
        }
    }

    componentDidMount(){
        axios.get(baseurl+"loans/")
            .then(res => {
                let resp = res.data
                console.log(resp)
                this.setState({
                    amount :resp.amount,
                    duration:resp.duration,
                    id:resp.id,
                    interest: resp.interest,
                    name: resp.name,
                    type:resp.type
                })
            })
    }
    render(){
        let i = 0
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
                        <LoanOfferCard bankName={this.state.name[i]} loanAmount={this.state.amount[i]} loanType={this.state.type[i]} id={this.state.id[i]} interest={this.state.interest[i]} loanDuration={this.state.duration[i]} />
                        <div className="text-gray-900">{i=i+1}</div>
                        <LoanOfferCard bankName={this.state.name[i]} loanAmount={this.state.amount[i]} loanType={this.state.type[i]} id={this.state.id[i]} interest={this.state.interest[i]} loanDuration={this.state.duration[i]} />
                        <div className="text-gray-900">{i=i+1}</div>
                        <LoanOfferCard bankName={this.state.name[i]} loanAmount={this.state.amount[i]} loanType={this.state.type[i]} id={this.state.id[i]} interest={this.state.interest[i]} loanDuration={this.state.duration[i]} />
                        <div className="text-gray-900">{i=i+1}</div>
                        <LoanOfferCard bankName={this.state.name[i]} loanAmount={this.state.amount[i]} loanType={this.state.type[i]} id={this.state.id[i]} interest={this.state.interest[i]} loanDuration={this.state.duration[i]} />
                        <div className="text-gray-900">{i=i+1}</div>
                        <LoanOfferCard bankName={this.state.name[i]} loanAmount={this.state.amount[i]} loanType={this.state.type[i]} id={this.state.id[i]} interest={this.state.interest[i]} loanDuration={this.state.duration[i]} />
                        <div className="text-gray-900">{i=i+1}</div>
                        <LoanOfferCard bankName={this.state.name[i]} loanAmount={this.state.amount[i]} loanType={this.state.type[i]} id={this.state.id[i]} interest={this.state.interest[i]} loanDuration={this.state.duration[i]} />
                        <div className="text-gray-900">{i=i+1}</div>
                        <LoanOfferCard bankName={this.state.name[i]} loanAmount={this.state.amount[i]} loanType={this.state.type[i]} id={this.state.id[i]} interest={this.state.interest[i]} loanDuration={this.state.duration[i]} />
                        <div className="text-gray-900">{i=i+1}</div>
                        <LoanOfferCard bankName={this.state.name[i]} loanAmount={this.state.amount[i]} loanType={this.state.type[i]} id={this.state.id[i]} interest={this.state.interest[i]} loanDuration={this.state.duration[i]} />
                        <div className="text-gray-900">{i=i+1}</div>
                        <LoanOfferCard bankName={this.state.name[i]} loanAmount={this.state.amount[i]} loanType={this.state.type[i]} id={this.state.id[i]} interest={this.state.interest[i]} loanDuration={this.state.duration[i]} />
                        <div className="text-gray-900">{i=i+1}</div>
                        <LoanOfferCard bankName={this.state.name[i]} loanAmount={this.state.amount[i]} loanType={this.state.type[i]} id={this.state.id[i]} interest={this.state.interest[i]} loanDuration={this.state.duration[i]} />
                        <div className="text-gray-900">{i=i+1}</div>
                        
                        
                    </div>

                </section>
            </div>
        )
    }
}

export default LoanOffers