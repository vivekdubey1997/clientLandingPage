// src/components/Login.js
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { postOTP } from '../actions/otpAction';
import './animation.css';

const OTPPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const phone = queryParams.get('phone'); // Retrieve the 'id' query parameter

  console.log("phone: "+phone);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [transactionId, setTransactionId] = useState(10000);
  // const phonenumberby = dispatch((state) => state.inputData);
  // console.log(phonenumberby);
  const handleSubmit = (e) => {
    setTransactionId(Math.floor(10000 + Math.random() * 90000));

    const payload = {
      "transaction_id": transactionId,
      "service_id": "5083",
      "msisdn": phone,
      "packageId":1802,
      "pincode":otp
    }

    dispatch(postOTP(payload));
    
    e.preventDefault();
    navigate('/dashboard');
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
        <h2 className="text-xl font-bold font-['Helvetica','sans-serif', 'Lato'] mb-3">Please enter OTP sent to mobile number</h2>
        <div className='w-64 m-auto p-[8px 10px] mb-4 h-12 text-[22px] text-center'>
          <OtpInput
            inputType={'number'}
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={{ width: '2.5rem', height: '3rem',  borderRadius: '4px', border: '1px solid #ccc', fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold', margin: 'auto'}}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <button
          type="submit"
          className="font-bold text-xl animate-pulse bg-gradient-to-r from-[#23aed4] to-[#17b33e] w-64  text-white py-2 rounded-xl hover:bg-green-600 transition duration-200"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default OTPPage;