import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import { FaHome, FaBell, FaHeart, FaEnvelope, FaWallet, FaStar, FaUser, FaCog, FaSlidersH } from "react-icons/fa"
import  image1 from "../Images/image1.png";
import image2 from "../Images/image2.png"
import image3 from "../Images/image3.png"
import image4 from "../Images/image4.png"
import app from "../config.js";

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return (
        <div className="main-container">
            <header className="main-header">
                  <div className="header logo">
                       <b>LOGO</b>
                  </div>
                  <div className="header search-bar">
                        <input type="text" name="search" placeholder="Search here" />
                        <span><FaSlidersH /></span>
                  </div>
                  <div className="header seller">
                        Become a Seller
                  </div>
            </header>
            <section className="content">
                <aside className="side-navbar">
                    <ul className="nav-links">
                        <li><FaHome className="icons" />Home</li>
                        <li><FaBell  className="icons" />Notifications</li>
                        <li><FaHeart className="icons" />Shop</li>
                        <li><FaEnvelope className="icons" />Conversation</li>
                        <li><FaWallet  className="icons" />Wallet</li>
                        <li><FaStar className="icons" />Subscription</li>
                        <li><FaUser className="icons" />My Profile</li>
                        <li><FaCog className="icons" />Settings</li>
                    </ul>
                    <button onClick={() => app.auth().signOut()}>Log out</button>
                </aside>
                <main className="main-content">
                    <h1>Welcome</h1>
                    <p>This is the dashboard, if you can see this you're logged in.</p>
                    <img src={image1} />
                </main>
                <aside className="side-content">
                    <img src={image2} />
                    <img src={image3} />
                    <img src={image4} />
                </aside>
            </section>
        </div>
    );
};

export default Dashboard;