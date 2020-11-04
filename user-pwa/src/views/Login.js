import React, { Component } from 'react'
import Img from "../assets/login.svg"

class Login extends Component{
    render(){
        return(
            <div>
                <section className="text-gray-500 bg-gray-900 body-font px-5">
                    <div className="container px-5 pb-24 pt-16 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-white">Log in</h1>
                            <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4" />
                        </div>
                        <div className="bg-gray-500 p-8 rounded-full">
                            <img  src={Img} alt="loginimage" />
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <form>
                                <center>
                                    <h2 className="text-white text-lg font-medium title-font mb-5">Please enter your details</h2>
                                </center>
                                <input className="bg-gray-900 rounded-full border text-white border-gray-900 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
                                <input className="bg-gray-900 rounded-full border text-white border-gray-900 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mb-4" placeholder="Password" type="password" />
                                <center className="pt-4">
                                    <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full mr-2">Submit</button>
                                    or
                                    <a className="text-orange-500 inline-flex items-center ml-2 text-lg font-light" href="/register">Register
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

export default Login;