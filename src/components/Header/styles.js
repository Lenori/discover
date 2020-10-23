import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;    
    width: 100%;
    padding: 20px 90px;

    ${props => props.absolute && css`
        position: absolute;        
        justify-content: space-between;
    `}

    img {
        width: 120px;
    }

    svg {
        display: none;
        font-size: 20px;
        margin: 0 50px 0;
        width: 10%;

        @media (max-width: 1350px) {
            display: block !important;
        }
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 43%;

    p {
        color: var(--tertiary);
        font-weight: 800;
        font-size: 20px;
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    @media (max-width: 670px) {
        display: none;
    }

    svg {
        display: block !important;
        font-size: 16px !important;
        margin: 0 !important;
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    p {
        color: var(--primary);
        font-weight: 600;
        font-size: 20px;
        margin: 0 30px 0;
    }
`;