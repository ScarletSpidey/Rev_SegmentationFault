import React, { Component } from 'react'
import Img from '../assets/register.svg'
class Register extends Component{
    render(){
        return(
            <div>
                <section className="text-gray-500 bg-gray-900 body-font px-5">
                    <div className="container px-5 pb-24 pt-16 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-white">Registration</h1>
                            <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4" />
                        </div>
                        <center>
                            <div className="bg-gray-900 rounded-full">
                                <img  src={Img} alt="loginimage" style={{ width: "60%" }} />
                            </div>
                        </center>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-8 md:mt-0">
                            <form className="w-full max-w-lg">
                                <center>
                                    <h2 className="text-white text-lg font-medium title-font mb-5">Please enter your details</h2>
                                </center>
                                <input className="bg-gray-900 rounded-full border text-white border-gray-900 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mb-4" placeholder="Full Name" type="text" />
                                <input className="bg-gray-900 rounded-full border text-white border-gray-900 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
                                <input className="bg-gray-900 rounded-full border text-white border-gray-900 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mb-4" placeholder="Account Aggregator ID" type="text" />
                                <input className="bg-gray-900 rounded-full border text-white border-gray-900 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mb-4" placeholder="Password" type="password" />
                                <div className="md:flex md:items-center mb-6">
                                
                                <div className="md:w-1/3 " />
                                    <label className="md:w-2/3 block text-gray-500 font-bold ml-3">
                                        <input className="mr-2 leading-tight" type="checkbox" />
                                        <span className="text-sm">
                                            I accept the terms and conditions
                                        </span>
                                    </label>
                                </div>

                                <center className="">
                                    <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full mr-2">Proceed</button>
                                    or
                                    <a className="text-orange-500 inline-flex items-center ml-2 text-lg font-light" href="/login">Login
                                    </a>
                                </center>
                            </form>
                      </div>
                </div>
                </section>

            </div>
        )
    }
}

export default Register;