import styled, {css} from 'styled-components';

export const Content = styled.div`
    width: 100%;
`;

export const Half = styled.div`
    width: 40%;
`;

export const Form = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    width: 100%;
    flex-direction: column;
    text-align: center;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p {
        font-weight: 300;
        font-size: 20px;
        margin: 0;
        text-align: left;
    }

    input {
        height: 60px;
        width: 100%;
        border: 1px solid #cccccc;
        border-radius: 8px;
        margin: 10px 0 40px;
        padding: 20px;
        color: var(--primary);
        font-weight: 700;
        font-size: 18px;
    }

    button {
        background-color: var(--secondary);        
        border-radius: 8px;
        border: none;
        width: 100%;
        padding: 20px;
        color: white;
        font-size: 25px;
        margin: 0 0 50px;
    }

    form {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        color: var(--primary);    
    }
`;

export const ImageInput = styled.div`
    width: 100% !important;
    height: 200px !important;
    background-color: #f3f3f3;
    border: 1px dashed #cccccc !important;
    margin: 0 0 40px 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 200px;

    input {
        height: 100%;
        margin: 0;
        background-color: red;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    p {
        color: var(--secondary);
        font-weight: 700;
        font-size: 25px;
    }

    svg {
        color: var(--secondary);
        font-size: 25px;
    }
`;

export const ImagePreview = styled.div`
    
    img {
        max-width: 100%;
    }

    p {
        color: var(--secondary);
        font-weight: 700;
        margin: 0 0 40px 0;
        font-size: 15px;
        cursor: pointer;
    }
`;

export const HalfInput = styled.div`
    width: 48%;
    float: left;
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: var(--primary);
    margin-top: 40px;

    button {
        width: 50%;
        margin: 0;
    }
`;

export const Span = styled.span`
    color: var(--secondary) !important;
    font-weight: 700;
    font-size: 18px;
    display: block;
    cursor: pointer;

    ${props => props.disabled && css `
        color: grey;
    `}
`;

