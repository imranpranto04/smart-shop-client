import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div>
            <h4>Please, you need to login.</h4>
            <Button onClick={handleSignIn}>Sign In</Button>
        </div>
    );
};

export default Login;