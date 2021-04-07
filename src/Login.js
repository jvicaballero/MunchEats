import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import "./styles/login.css";
import { AuthContext } from "./Auth";
// import Signup from "./Signup";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");

            } catch (error) {
                alert(error);
            }
        }, [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <div className="block2">
            </div>

            <div className="block1 d-flex justify-content-center align-items-center">
                <h1> Munch Eats</h1>
            </div>

            <div className="logo"></div>


            <div className="loginContainer p-5">
                <form className="d-flex flex-column" onSubmit={handleLogin}>
                    <div>
                        <h5>Email</h5>
                        <input type="email" className="form-control textField" name="email" />
                        <h5 className="mt-4">Password</h5>
                        <input type="password" class="form-control textField" name="password" />
                    </div>

                    <div className="d-flex flex-column mt-5 text-center">
                        <button style={{ fontSize: "19px" }} className="textField bg-info" type="submit">Login</button>
                        <p className="mt-2">Dont have an Account?  <a style={{ cursor: "pointer", color: "blue" }} onClick={() => history.push('/signup')}>Sign Up</a> </p>
                    </div>
                </form>
            </div>
        </div>

    )


}

export default withRouter(Login)
