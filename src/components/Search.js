import { StyledSearchBar } from "./styled/Search.styled";
import { FaSearch } from "react-icons/fa";

const Search = ({setSearchValue, getHero}) => {

    return (
        <StyledSearchBar>
                <input type="text" onChange={e => {setSearchValue(e.target.value)}}  placeholder="Who are you looking for?"/>
                <button type="submit" onClick={getHero}>
                    <FaSearch />
                </button>
        </StyledSearchBar>
    );
}

export default Search;