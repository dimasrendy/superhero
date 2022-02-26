import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then((response) => {
            console.log(response);

            // if (response.data.message) {
            //     setLoginStatus(response.data.message);
            // } else {
            //     setLoginStatus(response.data[0].username);
            // }

            // alert('login success');
            // navigate('/home');
        })
    };

    return (
        <div className="front-container">
            <h1>Login</h1>

            <div className="card">
                <input type="text" placeholder="username" onChange={(e) => { setUsername(e.target.value) }} />
                <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />

                <button onClick={login}>Login</button>
                
            </div>

            <h1>{loginStatus}</h1>

            <p>Don't have an account? <Link to={'/'}>Register</Link></p>
        </div>
    );
}
 
export default Login;