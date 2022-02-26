import { Button } from "./styled/Button.styled";
import { StyledNavbar } from "./styled/Navbar.styled";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Navbar = () => {
    // const [ isDetail ] = useState(true);

    return (
        <StyledNavbar>
            <div className="logo">
                <Link to="/home">Superhero Apps</Link>
            </div>
            <div className="favorite-hero">
                <Link to="/favorite">
                    <Button backgroundColor='#fff'>Favorite Hero</Button>
                </Link>
            </div>
        </StyledNavbar>
    );
}

export default Navbar;