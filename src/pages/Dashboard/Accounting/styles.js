import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80%;
    background-color: var(--tertiary);
    padding: 80px 40px 0;
    flex-direction: column;

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

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0 0 0;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
    }

    p {
        color: var(--primary);
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 50%;

        @media (max-width: 700px) {
            width: 100%;
            justify-content: flex-start;

            section {
                margin: 10px 0 0 0 !important;
                justify-content: flex-start !important;
            }
        }

        section {
            margin: 0 0 0 30px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 120px;
            cursor: pointer;

            svg {
                margin: 0 8px 0 0;
                color: #35a2ff !important;
            }

            p {                
                color: #35a2ff !important;
            }
        }
    }
`;

export const Pagination = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 0;
`;

export const Page = styled.p`
    color: #35a2ff;
    font-size: 17px;
    margin: 0 0 0 30px;
    cursor: pointer;

    ${props => props.active && css`
        background-color: #35a2ff !important;
        color: white !important;
        padding: 16px;
        border-radius: 8px;
    `}
`;