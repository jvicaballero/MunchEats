import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import "./styles/login.css"



const Signup = ({ history }) => {
    const handleSignup = useCallback(async event => {
        const Parse = require('parse/node')
        Parse.initialize('JalVFLmjJDUBqZ0hN9FyYbhbv2LHAaPIPLbKTuPp','2XXaKQbVcvXoq0XxyjCIhetuwv2dmoWTNVU4kDG6')
        Parse.serverURL = 'https://parseapi.back4app.com'
        event.preventDefault();

        //this is used to create a new instance of Parse User in Parse DB/no relation to Firebase
        const user = new Parse.User();

        const { email, password } = event.target.elements;
  
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
                user.set("username" , email.value)
                user.set("password", password.value)
                user.signUp();
            history.push("/");

        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <div className="block2Dasher">
            </div>

            <div className="block1 d-flex justify-content-center align-items-center">
                <h1> Munch Eats</h1>
            </div>

            <div className="logo"></div>


            <div className="loginContainer p-5">
                <form className="d-flex flex-column" onSubmit={handleSignup}>
                    <div>
                        <h5>Email</h5>
                        <input type="email" className="form-control textField" name="email" />
                        <h5 className="mt-4">Password</h5>
                        <input type="password" class="form-control textField" name="password" />
                    </div>

                    <div className="d-flex flex-column mt-5 text-center">
                        <button style={{ fontSize: "19px" }} className="textField bg-info" type="submit">Signup</button>
                        <p className="mt-2">Have an Account?  <a style={{ cursor: "pointer", color: "blue" }} onClick={() => history.push('/login')}>Login</a> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withRouter(Signup);
