import styled from 'styled-components';

export const Centering = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
`

export const FrontContainer = styled.div`
    width: 500px;
    height: 400px;
    background-color: white;
    border-radius: 6px;
    padding: 1rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h2 {
        color: #00B4CC;
    }

    p {
        padding-top: .6rem;
    }
`

export const FrontCard = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    form input {
        padding: .5rem;
        border-radius: 6px;
        border: 2px solid #00B4CC;  


        &:hover {
            border: 2px solid #3E8E7E;
        }
    }
`