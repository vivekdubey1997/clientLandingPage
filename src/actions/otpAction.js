export const POST_OTP_REQUEST = 'POST_DATA_REQUEST';
export const POST_OTP_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_OTP_FAILURE = 'POST_DATA_FAILURE';

export const postOTPRequest = () => ({
  type: POST_OTP_REQUEST,
});

export const postOTPSuccess = (data) => ({
  type: POST_OTP_SUCCESS,
  payload: data,
});

export const postOTPFailure = (error) => ({
  type: POST_OTP_FAILURE,
  payload: error,
});

// Action creator to send POST request
export const postOTP = (data) => {
  const payload = {
            "transaction_id": data.transaction_id,
            "service_id": data.service_id,
            "msisdn": data.msisdn,
            "packageId":1802,
            "pincode":data.pincode
          }
  // console.log(payload);
  return async (dispatch) => {
    dispatch(postOTPRequest());
    try {
      var Authtoken = "W3lK4pH8nQ5zU2gF7jY1vX6iD9tB0mC3oR2lZ8xS5fU6jA4eN1";
      const respons = await fetch(`http://adsgomedia.adbilling.me/api/v1/pinverify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${Authtoken}`
        },
        body: JSON.stringify(payload),
      });
      if (!respons.ok) {
        throw new Error('Network response was not ok');
      }
      // const data = await response.json();
      // if(!response.ok)
      //   {
          const inputPayload = {
            "mobileNumber": 971+data.msisdn,
            "otp": data.pincode
          }
      console.log(inputPayload)
          const response = await fetch(`https://bronze-stitch-lycra.glitch.me/api/v1/otp/send`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputPayload),
          });
        // }
         console.log(response.json())
      dispatch(postOTPSuccess(data));
    } catch (error) {
      dispatch(postOTPFailure(error.message));
    }
  };
};
