import { useEffect, useState } from "react";
import { FavoriteHeroStyled, FavoriteHeroContainer } from "./styled/FavoriteHero.styled";
import { Link } from "react-router-dom";

const FavoriteHero = () => {
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        const getFavorite = async() => {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': localStorage.getItem('token')
                }
            };

            try {
                const request = await fetch('http://localhost:3001/favorite', requestOptions);
                const data = await request.json();
                setFavorite(data.result);
            } catch (error) {
                console.log(error);
            }
        }
        getFavorite();
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