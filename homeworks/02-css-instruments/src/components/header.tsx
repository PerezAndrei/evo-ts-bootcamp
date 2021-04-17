import styled from 'styled-components';

const StyledHeader = styled.header({
    border: '1px solid red',
    backgroundColor: 'gray'
});

export function Header(){
    return (
        <StyledHeader>
            <span>Hello I'm Styled Header</span>
        </StyledHeader>
    )
}