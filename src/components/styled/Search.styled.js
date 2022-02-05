import styled from 'styled-components';

export const StyledSearchBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    input {
        width: 80%;
        border: 3px solid #00b4CC;
        border-right: none;
        padding: 5px;
        height: 42px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9DBFAF;
        font-size: 1rem;
    }

    input:focus {
        color: #00B4CC;
    }

    button {
        width: 42px;
        height: 42px;
        border: 1px solid #00B4CC;
        background: #00B4CC;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 1rem;
    }
`