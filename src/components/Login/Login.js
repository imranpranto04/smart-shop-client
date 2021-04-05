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
        <div className="container mt-3">
            <h2 className="mt-4 text-center text-danger">Please, you need to login.</h2>

            <div className="mt-5 d-flex justify-content-center">
            <Button  variant="info" onClick={handleSignIn}>Sign In With Google</Button>
            </div>
        </div>
    );
};

export default Login;