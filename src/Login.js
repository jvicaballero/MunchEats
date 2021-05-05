import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import "./styles/login.css";
import { notification } from 'antd';
import { AuthContext } from "./Auth";
// import Signup from "./Signup";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const Parse = require('parse/node')
            Parse.initialize('JalVFLmjJDUBqZ0hN9FyYbhbv2LHAaPIPLbKTuPp', '2XXaKQbVcvXoq0XxyjCIhetuwv2dmoWTNVU4kDG6')
            Parse.serverURL = 'https://parseapi.back4app.com'


            const { email, password } = event.target.elements;
            const user = Parse.User.logIn(email.value, password.value);

            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
                openNotification('success', 'Successfully signed in', '')

            } catch (error) {
                openNotification('error', 'Sign in Failed', 'The email or password is incorrect. Please try again')
            }
        }, [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />
    }
    const openNotification = (type, feedback, content) => {
        notification[type]({
            message: feedback,
            description: content
        });
    };

    return (
        <div>
            <div className="block2">
            </div>

            <div className="block1 d-flex justify-content-center align-items-center">
                <h1> Munch Eats</h1>
            </div>

            <div className="logo"></div>


            <div className="loginContainer p-5">
                <form className="d-flex flex-column loginform" onSubmit={handleLogin}>
                    <div>
                        <h5>Email</h5>
                        <input id="email" type="email" className="form-control textField" name="email" />
                        <h5 className="mt-4">Password</h5>
                        <input id="password" type="password" className="form-control textField" name="password" />
                    </div>

                    <div className="d-flex flex-column mt-5 text-center">
                        <button id="submitbtn" style={{ fontSize: "19px" }} className="textField bg-info" type="submit">Login</button>
                        <p className="mt-2">Dont have an Account?  <a id="signupLink" style={{ cursor: "pointer", color: "blue" }} onClick={() => history.push('/signup')}>Sign Up</a> </p>
                    </div>
                </form>
            </div>
        </div>

    )


}

export default withRouter(Login)
