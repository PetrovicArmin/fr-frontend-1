const USER_ID = 'arminarmin';
const PAT = 'f6fb863ed5b7462daceafa8073869f4d';
const APP_ID = 'my-first-application';

const getClarifaiRequest = (url) => {
    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
      "inputs": [
        {
          "data": {
            "image": {
              "url": url
            }
          }
        }
      ]
    });
    
    return {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Key ${PAT}`
      },
      body: raw
    };
}

export default getClarifaiRequest;
  