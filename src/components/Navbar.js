import { Button } from "./styled/Button.styled";
import { StyledNavbar } from "./styled/Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <StyledNavbar>
            <div className="logo">
                <Link to="/">Superhero Apps</Link>
            </div>
            <div className="favorite-hero">
                <Button backgroundColor='#fff'>Favorite Hero</Button>
            </div>
        </StyledNavbar>
    );
}
 
export default Navbar;