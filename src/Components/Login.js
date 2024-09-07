// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { postData } from '../actions/dataActions';
import './animation.css';
const Login = () => {
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [transactionId, setTransactionId] = useState(10000);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showError,setShowError] = useState(false);
  const [sourceIP, setSourceIP] = useState('14.142.189.6');
  const [packageId, setPackageId] = useState('1802'); // Default to Daily
  const [hitCount, setHitCount] = useState(0);
  // const inputphone = useSelector((state) => state.inputData);
  const userId = "1234";
  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactionId(Math.floor(10000 + Math.random() * 90000));
    const payload = {
      "transaction_id": transactionId,
      "service_id": "5083",
      "msisdn": "971"+phoneNumber,
      "ip": "14.142.189.6",
      "hitCount": hitCount,
      "user_agent":"Mozilla/5.0 (Linux; Android 12; V2162 Build/SP1A.210812.003;wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/124.0.1327.174Mobile Safari/537.36"
    }
    // dispatch(PhoneNumberReducer(phoneNumber));
    dispatch(postData(payload));
    

    
    navigate(`/otpvarification?phone=${phoneNumber}`);
    setPhoneNumber(''); // Clear the input field after submission
  };

  const isValidUAEPhoneNumber = (e) => {
    const uaePattern = /^(?:\+971|971)?[-\s()]?(50|51|52|53|54|55|56|57|58|59)[-\s()]?\d{7}$/;
    if(!uaePattern.test(parseInt("971"+phoneNumber)))
    {
      setPhoneNumber('');
      setShowError(true);
      e.preventDefault();
      setHitCount(hitCount+1);
    }
  };


  return (
    <div className="flex flex-col items-center h-auto">
      <div className="icntickwrap">
          <div className="icntick-bg">
              <svg viewBox="0 0 65 51" fill="none">
                  <path d="M7 25L27.3077 44L58.5 7" stroke="#fff" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
          </div>
          <div className="icntick-shadow"></div>
      </div>
      <form onSubmit={handleSubmit} className="w-96 text-center">
        <h2 className="text-xl font-bold font-['Helvetica','sans-serif', 'Lato'] mb-3">Please enter your mobile number</h2>
        <div className='border border-gray-300 rounded-md w-64 m-auto p-[8px 10px] h-12 text-[22px] font-bold'>
          <span className='h-full w-[20%] '>971</span>
          <input
            type="phone"
            value={phoneNumber}
            onChange={(e) => {setPhoneNumber(e.target.value); setShowError(false);}}
            required
            className="h-full w-[80%] m-[-1px] bg-transparent focus:outline-none"
          />
        </div>
        {showError?<div className="p-1 mb-2 text-sm text-red-800 rounded-lg  dark:text-red-400" role="alert">
  <span className="font-medium">Please validate your phone number.</span></div>:''}
        <p className='  mb-4 font-thin text-[11px]'>(example:971 xxxx xxxx)</p>
        <button
          type="submit"
          onClick={(e)=>isValidUAEPhoneNumber(e)}
          className="font-bold text-xl animate-pulse bg-gradient-to-r from-[#23aed4] to-[#17b33e] w-64  text-white py-2 rounded-xl hover:bg-green-600 transition duration-200"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;