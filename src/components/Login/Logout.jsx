import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Button } from '@material-ui/core';

const clientID = '696054945707-irmop4c5ldb9ss774o80c2pcq3d9bo76.apps.googleusercontent.com';

const Logout = (props) => {

    const onSuccess = () => {
        alert('See you soon ;)');
        props.setUser(null);
    }

    return (
        <>
          <GoogleLogout 
            clientId={clientID}
            render={renderProps => (
              <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</Button>
            )}
            onLogoutSuccess={onSuccess}
          />  
        </>
    )
}

export default Logout;
