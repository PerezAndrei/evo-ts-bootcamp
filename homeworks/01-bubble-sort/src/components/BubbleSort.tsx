import { getRandomSet } from '../services/randomService';
import { Header } from './Header'

getRandomSet().then(result => {
    console.log('get rendom set', result)
}).catch(error => {
    console.error(error);
});

export function BubleSort() {
    return (
        <div className="bs-layout">
            <header>
                <Header></Header>
            </header>
            <main></main>
            <footer></footer>
        </div>
    );
}