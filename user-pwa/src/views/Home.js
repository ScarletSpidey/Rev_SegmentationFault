import React from 'react'
import Img from "../assets/home2.svg"
import Img2 from "../assets/onemoney.png"


const Home = () => {
    return(
        <div>
                <header className="text-gray-500 bg-gray-900 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/home">
                            <svg className="w-10 h-10 text-white p-2 bg-orange-500 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                            <span className="ml-3 text-xl">Samriddhi</span>
                        </a> 
                    </div>
                </header>

                <section className="text-gray-500 bg-gray-900 body-font">
                    <div className="container px-5 pb-24 pt-12 mx-auto flex flex-col">
                        <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg overflow-hidden">
                            <center>
                                <img alt="content" className="object-cover object-center w-11/12" src={Img} />
                            </center>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-white text-lg">Don't be scared, be secured</h2>
                                <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4" />
                                <p className="text-base text-gray-600">Have a transaction stuck up due to undelivered documentation? Unable to cope with the confusing and tedious procedure of taking out a loan? Then this is the app for you! Sign up and we promise your application will not bounce!</p>
                            </div>
                            </div>
                        </div>
                        <div className ="flex  flex-col sm:flex-row mt-10">
                            <center>
                                <div>
                                    <div className="flex justify-center pt-10">
                                        <a className="inline-flex text-white bg-orange-500 border-0 py-3 px-8 focus:outline-none hover:bg-orange-600 rounded-full text-lg" href="/login">Get Started
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6 ml-1" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                                <div className="text-gray-700 text-sm pt-10">
                                    * Powered by
                                </div>
                                <center>
                                    <img src = {Img2} alt="one money logo" />
                                </center>
                            </center>
                        </div>
                        </div>
                    </div>
                </section>

        </div>
    )
}

export default Home;