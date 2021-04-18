import styled from 'styled-components';

import styles from '../styles/modules/headerModule/Header.module.css';

const StyledHeader = styled.header({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ccebff85',
    width: '100%',
    height: '50px',
    padding: '10px',
    boxShadow: '0px 5px 9px #ccebffa6'
});

export function Header(){
    return (
        <div className={styles.header}>
            <h4>The unsplash gallery</h4>
            <div className={styles.separator}></div>
        </div>
    )
}