import { Button } from "./styled/Button.styled";
import { StyledNavbar } from "./styled/Navbar.styled";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
  }

  return (
    <StyledNavbar>
      <div className="logo">
        <Link to="/">Superhero Apps</Link>
      </div>
      <div className="favorite-hero">
        <Link to="/favorite">
          <Button backgroundColor='#fff'>Favorite Hero</Button>
        </Link>
        <Link to="/login" onClick={ logout }>
          <Button backgroundColor='#F4BBBB'>Logout</Button>
        </Link>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;