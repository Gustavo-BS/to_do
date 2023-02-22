import styled from "styled-components";

export const Container = styled.div`
    background-color: #2a9d8f;
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image{
        margin-right: 5px;
    }

    input{
        border: 0;
        background: transparent;
        outline: 0;
        color: white;
        font-size: 18px;
        flex: 1;
    }
    input::placeholder{
        color: white;
        font-weight: bold;
    }
    
    button{
        width: 50px;
        height: 30px;
        border-radius: 50px;
        background-color: #e9c46a;
        font-weight: bold;
        color: black;
        /* text-shadow: black 0.1em 0.1em 0.2em; */
    }
`;