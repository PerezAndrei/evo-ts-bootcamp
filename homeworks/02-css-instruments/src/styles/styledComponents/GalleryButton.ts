import styled from 'styled-components';

export const GalleryButton = styled.button`
    color: #fff;
    background-color: #545b62;
    border-color: #4e555b;
    border: 1px solid transparent;
    border-radius: .25rem;
    height: 35px;
    &:focus{
        box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 50%)
    }
    &:hover{
        background-color: #5a6268;
        border-color: #545b62;
    }
    &:disabled{
        background-color: #6c757d;
        border-color: #6c757d;
    }
`;