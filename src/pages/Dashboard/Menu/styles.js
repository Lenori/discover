import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 20%;
    background-color: var(--primary);
    flex-direction: column;
    min-height: 100vh;

    a {
        width: 100%;
    }

    svg {
        display: none;
        color: white;
        font-size: 24px;
        position: absolute;
        background-color: var(--primary);
        padding: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        left: 103%;
        top: 7px;
    }

    @media (max-width: 1350px) {
        ${props => !props.show && css `
            display: none !important;
        `}

        width: 320px;
        position: fixed;
        top: 0;
        z-index: 300;

        svg {
            display: block !important;
        }
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 30px 10px 30px 30px;
    color: white;
    ${props => !props.blockHover && css `cursor: pointer;`}

    &:hover {
        ${props => !props.blockHover && css `
            background-color: var(--tertiary);
            border-left: 6px solid var(--secondary);
            color: var(--primary) !important;
        `}
    }

    ${props => props.selected && css`
        background-color: var(--tertiary);
        border-left: 6px solid var(--secondary);
        color: var(--primary) !important;
    `}

    svg {
        margin: 0 20px 0 0;
        font-size: 20px !important;
        display: block !important;

        position: relative !important;
        background-color: unset !important;
        padding:  unset !important;
        width: unset !important;
        height: unset !important;
        border-radius: unset !important;
        left: unset !important;
        top: unset !important;
    }
    
    h2 {
        font-weight: 100;
        font-size: 17px;
    }
`;

export const SubMenus = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    color: white;

    a {
        width: 70% !important;
    }
`;

export const SubMenu = styled.h3`
    color: white;
    cursor: pointer;
    width: 100%;
    text-align: left;
    padding: 20px;
    margin: 10px 0 0 0;
    border-radius: 30px 0 0 30px;
    font-weight: 100;

    &:hover {
        background-color: var(--secondary);
    }

    ${props => props.selected && css`
        background-color: var(--secondary);
    `}
`;