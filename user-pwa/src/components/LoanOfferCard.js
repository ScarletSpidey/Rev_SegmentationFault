import React from 'react'

import {
    ModalProvider,
    Modal,
    useModal,
    ModalTransition,
  } from 'react-simple-hook-modal';

  import '../assets/modal.css';

const ReturnLogo = (BankName) => {
    if(BankName === "Rashi Bank"){
        return(
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        )
    }
    if(BankName === "Premium Bank Corp."){
        return(
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle cx={6} cy={6} r={3} />
              <circle cx={6} cy={18} r={3} />
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
            </svg>
        )
    }
    if(BankName === "New Wealth Trust"){
        return(
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
        )
    }
    if(BankName === "IDIDI Bank"){
        return(
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
            </svg>
        )
    }

    
}

const ModalContent = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    return (
      <>
        <Modal
          id="2"
          isOpen={isModalOpen}
          onBackdropClick={closeModal}
          transition={ModalTransition.SCALE}
        >
          <p>This modal can be closed by clicking the backdrop.</p>
        </Modal>
        
        <div className="text-center pt-12">
            <span className="text-2xl font-bold pb-6 text-white">
            Would you like to Request for this Loan ? 
            </span>
        </div>
        <div className="flex justify-center pt-12">
            <button onClick={openModal} className="inline-flex text-white font-bold bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-lg">Yes</button>
            <button className="ml-4 inline-flex text-gray-100 font-bold bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-lg" onClick={closeModal}>No</button>
        </div>
      </>
    );
  };

const MyComponent = (props) => {
    const { isModalOpen, openModal, closeModal } = useModal();
  
    return (
      <>
        <div className="flex justify-end pt-10">
            <button onClick={openModal} className="inline-flex text-white bg-orange-500 border-0 py-1 px-4 focus:outline-none hover:bg-orange-600 rounded-full text-sm">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>
        </div>
        <Modal
          id={props.id}
          isOpen={isModalOpen}
          transition={ModalTransition.SCALE}
          onBackdropClick={closeModal}
        >
            <div className="mx-auto flex flex-wrap p-3 flex-col md:flex-row items-end">
                <button className="flex title-font font-medium items-center text-white md:mb-0" onClick={closeModal}>
                    <svg className="w-8 h-8 text-white p-2 bg-red-500 rounded-full"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
            </div>
            <div className="text-2xl font-bold text-white">
                {props.name} 's Offer :
            </div>
            <br />
            <span className="text-xl pb-6">
                Loan Amount : <span className="text-xl font-bold text-green-500">{"₹"+props.amount}</span>
            </span>
            <br />
            
            <span className=" text-xl pb-6">
                Type : <span className="font-bold text-white">{props.type}</span>
            </span>
            <br />
            <span className="text-xl pb-6">
                Duration : <span className="font-bold text-white">{props.duration + " Months"}</span>
            </span>
            <br /> <br />

            <ModalContent />
            

        </Modal>
      </>
    );
  };

const LoanOfferCard = (props) => {
    return(
        <div className="xl:w-1/3 md:w-1/2 w-full p-4">
            <div className="border border-gray-800 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-orange-400 mb-4">
                    {ReturnLogo(props.bankName)}
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                    {props.bankName}
                </h2>
                <span className="text-md">
                    Loan Amount : <span className="font-bold text-green-500">{"₹"+props.loanAmount}</span>
                </span>
                <br />
                <div className="flex">
                    <span className="w-3/7 text-md">
                        Type : <span className="font-bold text-white">{props.loanType}</span>
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="w-4/7 text-md">
                        Duration : <span className="font-bold text-white">{props.loanDuration + " Months"}</span>
                    </span>
                </div>
                <ModalProvider>
                    <MyComponent name={props.bankName} amount={props.loanAmount} type={props.loanType} duration={props.loanDuration} id={props.id} />
                </ModalProvider>
            </div>
        </div>
    )
}

export default LoanOfferCard