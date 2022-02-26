import { useState } from "react";
import { Link } from 'react-router-dom';

const Register = () => {
    const [usernameReq, setUsernameReq] = useState('');
    const [passwordReq, setPasswordReq] = useState('');

    const register = () => {
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: usernameReq,
                password: passwordReq
            })
        })
            .then((response) => {
                // alert('new user added');
                console.log(response);
            })
    }

    return (

        <div className="front-container">
            <h1>Register</h1>

            <div className="card">
                <form>
                    <input type="text" placeholder="username" onChange={(e) => { setUsernameReq(e.target.value) }} />
                    <input type="password" placeholder="password" autoComplete="" onChange={(e) => { setPasswordReq(e.target.value) }} />

                    <button onClick={register}>Register</button>
                </form>
            </div>

            <p>Already have an accout? <Link to={'/login'}>Sign in</Link></p>
        </div>

    );
}

export default Register;