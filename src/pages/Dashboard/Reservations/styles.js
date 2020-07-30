import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    background-color: var(--tertiary);
    padding: 80px 40px;
    flex-direction: column;

    h1 {
        font-weight: 400;
        font-size: 35px;
        color: var(--primary);
    }
`;