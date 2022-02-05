import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1rem;
    padding: 1rem;
    background-color: ${(props) => props.backgroundColor};
    box-shadow: 0 0 10px rgba(0,0,0,0.15);

    &:hover {
        opacity: 0.9;
        transform: scale(0.99);
    }
`