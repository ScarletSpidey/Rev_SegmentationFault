import React from 'react'

import Img from '../assets/details.svg'
import Img2 from '../assets/otp.svg'
import Img3 from '../assets/submit.svg'

import {Link} from 'react-router-dom'

import {
    ModalProvider,
    Modal,
    useModal,
    ModalTransition,
  } from 'react-simple-hook-modal';

import '../assets/modal.css';

import sampleData from '../variables/sampleData'

const ModalContent2 = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return(
    <>
      <Modal
        id="2"
        isOpen={isModalOpen}
        onBackdropClick={closeModal}
        transition={ModalTransition.SCALE}
      >
        <div className="container mx-auto my-auto flex px-5 py-6 md:flex-row flex-col items-center">
            <h1 className="font-bold text-white pb-10 text-3xl ">Your Request Has Been Sent!</h1>
            <center>
              <img src={Img3} alt="details" className="pb-8" />
            </center>
            <div className="pt-10">
              <Link to="/app">
                <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full text-lg">
                  Go Back to Home
                </button>
              </Link>
            </div>
            
        </div>
      </Modal>
      <button onClick={openModal} className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full text-lg">
        Submit
      </button>
    </>
  )
}

const ModalContent = (props) => {
    const { isModalOpen, openModal, closeModal } = useModal();
    return (
      <>
        <Modal
          id="2"
          isOpen={isModalOpen}
          onBackdropClick={closeModal}
          transition={ModalTransition.SCALE}
        >
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pt">
            <center>
                    <img src={Img2} alt="details" style={{width: '80%'}}/>
            </center>
            <h2 className="text-white text-lg mb-1 font-bold title-font">OTP Verification</h2>
            <p className="leading-relaxed mb-5 text-gray-600 text-white">
              Please enter the OTP
            </p>
            <input
              className="bg-gray-800 rounded-full border border-gray-700 focus:outline-none focus:border-orange-500 text-base text-white px-4 py-2 mb-4"
              placeholder="Enter your 6 digit OTP number"
              type="text"
            />
            <ModalContent2 />
          </div>

        </Modal>
        
        <div className="text-center pt-12">
            <span className="text-xl font-bold pb-6 text-white">
              Do you consent to provide your financial  information to {props.bankName} for 10 Days?
            </span>

        </div>
        <div className="flex justify-center pt-4">
            <button onClick={openModal} className="inline-flex text-white font-bold bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-lg">Yes</button>
            <Link to="/app">
              <button className="ml-4 inline-flex text-gray-100 font-bold bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-lg" onClick={closeModal}>No</button>
            </Link>
        </div>
      </>
    );
  };


const DetailsPage = (props) => {
    let loanid = props.match.params.id
    let details = sampleData.find(x => x.id === loanid)
    return(
      <div>
        <header className="text-gray-500 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white md:mb-0" href="/app">
                  <svg className="w-10 h-10 text-white p-2 bg-orange-500 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                <span className="ml-3 text-xl">Samriddhi</span>
                </a>
            </div>
        </header>

        <section className="text-gray-500 bg-gray-900 body-font">
            <div className="container px-5 pb-6 pt-6 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-white">Loan Offers</h1>
                    <div className="w-12 h-1 bg-orange-500 rounded mt-2" />
                </div>    
            </div>
            <div className="container mx-auto flex px-5 pb-6 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  {details.name}'s Loan Offer
                </h1>
                <center>
                  <img src={Img} alt="details" style={{width: '80%'}}/>
                </center>
                <div className="justify-start pt-6">
                  <span className="text-xl pb-2 text-white">
                  Loan Amount : <span className="text-xl font-bold text-green-500">{"₹"+details.amount}</span>
                  </span>
                
                  <br />
                  <span className=" text-xl pb-2 text-white">
                      Type : <span className="font-bold text-white">{details.type}</span>
                  </span>
                  <br />
                  <span className="text-xl pb-2 text-white">
                      Duration : <span className="font-bold text-white">{details.duration + " Months"}</span>
                  </span>
                  <br />
                  <span className="text-xl pb-2 text-white">
                      Rate of interest : <span className="font-bold text-white">{details.intrest + " %"}</span>
                  </span>
                </div>

                <ModalProvider>
                    <ModalContent bankName={details.name} />
                </ModalProvider>
                </div>
            </div>
        </section>
      </div>

    )
}

export default DetailsPage