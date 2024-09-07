export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const postDataRequest = () => ({
  type: POST_DATA_REQUEST,
});

export const postDataSuccess = (data) => ({
  type: POST_DATA_SUCCESS,
  payload: data,
});

export const postDataFailure = (error) => ({
  type: POST_DATA_FAILURE,
  payload: error,
});

// Action creator to send POST request
export const postData = (data) => {
  
  return async (dispatch) => {

    const payload = {
      "transaction_id": data.transaction_id,
      "service_id": data.service_id,
      "msisdn": data.msisdn,
      "ip": data.ip,
      "user_agent": data.user_agent
    }
  


    dispatch(postDataRequest());
    try {
      var Authtoken = "W3lK4pH8nQ5zU2gF7jY1vX6iD9tB0mC3oR2lZ8xS5fU6jA4eN1";

      const response = await fetch(`http://adsgomedia.adbilling.me/api/v1/pinsend`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${Authtoken}`
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
     
      if(response.ok)
        {
          const inputPayload = {
            "mobileNumber": payload.msisdn,
            "sendStatus": data.success,
          }
         
          const response = await fetch(`http://192.168.0.185:8000/api/v1/users/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              
            },
            body: JSON.stringify(inputPayload),
          });
         
          if(!response.ok)
          {
            throw new Error('Network response was not ok');
          }
          else{
            console.log("Data success");
          }
        }

     
      dispatch(postDataSuccess(data));
    } catch (error) {
      dispatch(postDataFailure(error.message));
    }
  };
};
