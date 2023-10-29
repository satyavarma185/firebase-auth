import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="form-content">
            <div className="welcome">
                <h1>Welcome</h1>
                {currentUser ? (
                    <p>
                        You are logged - <Link to="/dashboard">View Dashboard</Link>
                    </p>
                ) : (
                    <p className="home-login-signup">
                        <Link to="/login" className="home-login">Log In</Link> or <Link to="/signup" className="home-signup">Sign Up</Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Home;