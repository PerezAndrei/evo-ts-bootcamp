import { Content } from "./Content";
import { Header } from "./Header";
import styles from '../styles/modules/mainContainerModule/MainContainer.module.css';

export function App(){
    return (
        <div className={styles.mainContainer}>
            <Header/>
            <Content/>
        </div>
    )
}