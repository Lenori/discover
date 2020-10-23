import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80%;
    background-color: var(--tertiary);
    padding: 80px 40px 0;
    flex-direction: column;
    min-height: 100vh;

    @media (max-width: 1350px) {
        width: 100%;
    }

    h1 {
        font-weight: 400;
        font-size: 35px;
        color: var(--primary);

        span {
            color: var(--secondary) !important;
        }
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 20px 0;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: flex-start;

        button {
            margin: 20px 0 0 0;
        }
    }

    button {
        background-color: var(--secondary);
        border: none;
        color: white;
        text-transform: uppercase;
        font-size: 13px;
        padding: 15px 25px;
    }
`;
