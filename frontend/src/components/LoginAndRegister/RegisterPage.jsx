import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';
import { IoHomeSharp } from "react-icons/io5";
import { Button } from 'antd';
import axios from 'axios';

function RegisterPage() {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [cPassword, setCPassword] = React.useState();

    const navigate = useNavigate();

    function handleSubmit(e) {
        e?.preventDefault()
        axios.post('', { email, password, cPassword })
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    const handleClick = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="login-container">
            <Button className='home-icon' size='large' onClick={handleClick} icon={<IoHomeSharp />}>
            </Button>
            <div className="login-box">
                <h2 className="login-title">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Enter Email:</label>
                        <input type="email" id="username" className="input-field" placeholder="email" onChange={(e) => setEmail(e?.target?.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Create Password:</label>
                        <input type="password" id="password" className="input-field" placeholder="Enter your password" onChange={(e) => setPassword(e?.target?.value)} />

                        <label htmlFor="password">Enter Password Again:</label>
                        <input type="password" id="password" className="input-field" placeholder="Re-enter your password" onChange={(e) => setCPassword(e?.target?.value)} />
                    </div>
                    <div className="changePage">Already Registered? <Link to="/log-in">Login</Link></div>

                    {/* <div className="changePage"><a href='./LoginPage.jsx'>Login</a></div> */}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
