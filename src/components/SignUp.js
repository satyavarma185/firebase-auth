import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import app from "../config";

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            app.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
        } catch (error) {
            alert(error);
        }
    };
    if (currentUser) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <div className="form-content">
            <form onSubmit={handleSubmit}>
            <div className="container">
                <h1>Sign Up</h1>
                <hr />

                <label for="email"><b>Email :</b></label>
                <input type="email" name="email" placeholder="Enter Email" required />

                <label for="password"><b>Password :</b></label>
                <input type="password" name="password" placeholder="Password" />

                <button type="submit">Submit</button>

                    <p>Already have an account ? <Link to="/login">Log In</Link></p>
            </div>
            </form>
        </div>
    );
};

export default SignUp;