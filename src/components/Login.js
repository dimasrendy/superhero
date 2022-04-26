import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "./styled/Button.styled";
import { Centering, FrontContainer, FrontCard } from "./styled/Register.styled";
import Axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState(false);

  const login = e => {
    e.preventDefault();
    Axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        setLoginStatus(true);
        localStorage.setItem('token', response.data.token)
        navigate('/');
      }
    });
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      Axios.get('http://localhost:3001/isUserAuth', {
        headers: {
          'authorization': localStorage.getItem('token'),
        }
      })
        .then((response) => {
          if (response.data.auth === true) {
            navigate('/');
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [])

  return (
    <Centering>
      <FrontContainer>
        <h2>Login</h2>

        <FrontCard>
          <form>
            <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
            <input type="password" placeholder="Password" autoComplete="" onChange={(e) => { setPassword(e.target.value) }} />

            <Button backgroundColor='#00B4CC' onClick={login}>Login</Button>
          </form>

        </FrontCard>

        <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
      </FrontContainer>
    </Centering>
  );
}

export default Login;