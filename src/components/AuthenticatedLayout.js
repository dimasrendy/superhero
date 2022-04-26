import Navbar from "./Navbar";
import { Container } from "./styled/Container.styled";
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Axios from "axios";

const AuthenticatedLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      Axios.get('http://localhost:3001/isUserAuth', {
        headers: {
          'authorization': localStorage.getItem('token'),
        }
      })
        .then((response) => {
          if (response.data.auth === false) {
            navigate('/login');
          }
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default AuthenticatedLayout;