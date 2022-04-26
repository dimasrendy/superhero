import { useState } from "react";
import { Link } from 'react-router-dom';
import { FrontContainer, FrontCard, Centering } from "./styled/Register.styled";
import { Button } from "./styled/Button.styled";
import Axios from 'axios';

const Register = () => {
    const [usernameReq, setUsernameReq] = useState('');
    const [passwordReq, setPasswordReq] = useState('');
    
    Axios.defaults.withCredentials = true;



    const register = async (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/register', {
            username: usernameReq,
            password: passwordReq,
        }).then((response) => {
            console.log(response);
        });

        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: usernameReq,
        //         password: passwordReq
        //     })
        // };

        // try {
        //     const response = await fetch('http://localhost:3001/register', requestOptions);
        //     const data = await response.json();
        //     return data;
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <Centering>
            <FrontContainer>
                <h2>Register</h2>

                <FrontCard>
                    <form>
                        <input type="text" placeholder="Username" onChange={(e) => { setUsernameReq(e.target.value) }} />
                        <input type="password" placeholder="Password" autoComplete="" onChange={(e) => { setPasswordReq(e.target.value) }} />

                        <Button backgroundColor='#00B4CC' onClick={register}>Register</Button>
                    </form>
                </FrontCard>

                <p>Already have an accout? <Link to={'/login'}>Login</Link></p>
            </FrontContainer>
        </Centering>
    );
}

export default Register;