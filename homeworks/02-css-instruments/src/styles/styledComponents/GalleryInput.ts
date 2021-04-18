import styled from 'styled-components';

// export const GalleryInput = styled.input({
//    backgroundColor: '#fff',
//    border: '1px solid #ced4da',
//    borderRadius: '3px'
// });

export const GalleryInput = styled.input`
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 3px;
    height: 35px;
    &:focus{
     outline: 0;
     border-color: #ced4da;
     box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 50%);
    }`;