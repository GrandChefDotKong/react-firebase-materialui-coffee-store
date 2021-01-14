import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Button } from '@material-ui/core';

const clientID = '696054945707-irmop4c5ldb9ss774o80c2pcq3d9bo76.apps.googleusercontent.com';

const refreshTokenSetup = (res) => {
    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  
    const refreshToken = async () => {
      const newAuthRes = await res.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      console.log('newAuthRes:', newAuthRes);
      // saveUserToken(newAuthRes.access_token);  <-- save new token
      localStorage.setItem('authToken', newAuthRes.id_token);
  
      // Setup the other timer after the first one
      setTimeout(refreshToken, refreshTiming);
    };
  
    setTimeout(refreshToken, refreshTiming);
};


const Login = (props) => {
    const onSuccess = (res) => {
        console.log('Login Success, user :', res.profileObj.email);

        props.setUser(res.profileObj)
        refreshTokenSetup(res);
    }

    const onFailure = (res) => {
        console.log('Login Failure,', res);
    }

    return (
        <>
            <GoogleLogin 
                clientId={clientID} 
                render={renderProps => (
                    <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</Button>
                )}
                onSuccess={onSuccess} 
                onFailure={onFailure} 
                cookiePolicy={'single_host_origin'} 
                isSignedIn={true}
            />   
        </>
    )
}

export default Login;
