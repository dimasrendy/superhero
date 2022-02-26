import styled from 'styled-components';

export const FavoriteHeroStyled = styled.div`
    background-color: #fff;
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: .6rem 0;
    border-radius: 12px;


    img {
        width: 100%;
        margin-bottom: .6rem;
    }

    a {
        text-decoration: none;
        color: black;
        text-align: center;
    }

    &:hover {
        font-weight: bold;
    }
`

export const FavoriteHeroContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 1.5rem;
    justify-content: space-around;    
    flex-wrap: wrap;
`