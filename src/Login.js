import React, {useCallback, useContext} from "react";
import {withRouter, Redirect} from "react-router";
import app from "./base.js";
import {AuthContext} from "./Auth"
// import Signup from "./Signup";

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");

            }catch(error){
                alert(error);
            }
        }, [history]
    );

    const {currentUser} = useContext(AuthContext);

    if(currentUser) {
        return <Redirect to="/" />
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Email
                    <input name="email" type="email" placeholder="Email"/>
                </label>

                 <label>Password
                    <input name="password" type="password" placeholder="Password"/>
                 </label>
                 <button type="submit">Login</button>
            </form>

            <button onClick={() => history.push('/signup')}>Create an Account</button>
        </div>
        
    )


}

export default withRouter(Login)