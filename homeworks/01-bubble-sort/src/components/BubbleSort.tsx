import React from 'react';
import { GameStatus } from '../helpers/enums';
import { BubleSortProps, BubleSortState, HandleStatus } from '../types/componentTypes';
import { ControlPanel } from './ControlPanel';
import { Header } from './Header'
import { Items } from './Items';
import { Status } from './Status';

export class BubleSort extends React.Component<BubleSortProps, BubleSortState> {
    constructor(props: BubleSortProps) {
        super(props);
        this.state = {
            status: GameStatus.Initial
        }
    }

    handleStatus: HandleStatus = (status) => {
        this.setState({
            status: status
        });
    }

    render() {
        let { status } = this.state;
        return (
            <div className="bs-layout">
                <header>
                    <Header></Header>
                </header>
                <main>
                    <Items status={status}
                        onStatusChanged={this.handleStatus} />
                </main>
                <footer>
                    <ControlPanel status={status}
                        onStatusChanged={this.handleStatus} />
                    <Status status={status}
                        onStatusChanged={this.handleStatus} />
                </footer>
            </div>
        )
    }
}