import React from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.css'; // Make sure this path matches the location of your CSS file

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" className="input-field" placeholder="Enter your username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" className="input-field" placeholder="Enter your password" />
                    </div>
                    <div className="changePage">Not yet Registered? <Link to="/signin">Register</Link></div>
                    
                    {/* <div className="changePage"><a href='./Register.jsx'>Register</a></div> */}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
