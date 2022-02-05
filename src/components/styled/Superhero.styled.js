import styled from 'styled-components';

export const SuperheroStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-radius: 12px;
    background-color: #fff;

`
export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: .5rem;
    margin-bottom: .5rem;
    h3 {
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    border: 1px solid black;
    min-width: 60%;


    .details {
        display: flex;
    }

    .details label, p {
        flex: 1;
    }

    .aliases {
        display: flex;
        flex-direction: column;
    }
`
export const Overview = styled.div`
    display: flex;
    gap: 2rem;
    padding: .5rem;

    .avatar {
        width: 25%
    }

    .avatar img {
        width: 100%;
    }

    .overview-card {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .card-details {
        padding-bottom: .8rem;
    }

    .card-details label, p {
        font-size: 1.5rem;
    }

    .card-details label {
        font-weight: 700;
    }

`