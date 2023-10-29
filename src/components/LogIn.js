import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import app from "../config.js";

const LogIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            app.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <div className="form-content">
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1>Login</h1>
                    <hr />

                    <label for="email"><b>Email :</b></label>
                    <input type="email" name="email" placeholder="Enter Email" required />

                    <label for="password"><b>Password :</b></label>
                    <input type="password" name="password" placeholder="Password" />

                    <button type="submit">Submit</button>

                    <p>Don't have an account ? <Link to="/signup">Sign Up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LogIn;