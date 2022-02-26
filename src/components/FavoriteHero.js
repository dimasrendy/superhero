import { useEffect, useState } from "react";
import { FavoriteHeroStyled, FavoriteHeroContainer } from "./styled/FavoriteHero.styled";
import { Link } from 'react-router-dom';

const FavoriteHero = () => {
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/favorite')
            .then(res => res.json())
            .then(result => {
                setFavorite(result);
            });
    }, []);

    return (
        <FavoriteHeroContainer>
            {favorite && favorite.map((fav) => (
                <FavoriteHeroStyled key={fav.hero_id}>
                    <Link to={`/favorite/${fav.hero_id}`}>
                        <img src={fav.images} alt="favorite hero avatar" />
                        <p>{fav.name}</p>
                    </Link>
                </FavoriteHeroStyled>
            ))}
        </FavoriteHeroContainer>

    );
}

export default FavoriteHero;