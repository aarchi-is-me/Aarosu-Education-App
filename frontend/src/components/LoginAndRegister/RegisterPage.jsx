import React from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Register</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Enter Email:</label>
                        <input type="email" id="username" className="input-field" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Create Password:</label>
                        <input type="password" id="password" className="input-field" placeholder="Enter your password" />
                        <label htmlFor="password">Enter Password Again:</label>
                        <input type="password" id="password" className="input-field" placeholder="Re-enter your password" />
                    </div>
                    <div className="changePage">Already Registered? <Link to="/login">Login</Link></div>
                    
                    {/* <div className="changePage"><a href='./LoginPage.jsx'>Login</a></div> */}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
