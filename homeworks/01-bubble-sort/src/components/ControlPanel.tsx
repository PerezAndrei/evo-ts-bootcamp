import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { GameStatus } from "../helpers/enums";
import { ControlButtonClick, ControlPanelProps, ControlPanelState } from "../types/componentTypes";

export class ControlPanel extends React.Component<ControlPanelProps, ControlPanelState> {
    constructor(props: ControlPanelProps) {
        super(props);
    }

    handleClick: ControlButtonClick = (status) => {
        this.props.onStatusChanged(status);
    }

    render() {
        const { status } = this.props;
        return (
            <div className="control-panel">
                <ButtonGroup>
                    <Button
                        onClick={() => { this.handleClick(GameStatus.Reset) }}
                        variant="primary"
                        size="sm"
                        disabled={status === GameStatus.Reset || status === GameStatus.Initial}>Reset</Button>
                    <Button
                        onClick={() => { this.handleClick(GameStatus.Running) }}
                        variant="primary"
                        size="sm"
                        disabled={status !== GameStatus.ReadyToStart && status !== GameStatus.Pause}>Start</Button>
                    <Button
                        onClick={() => { this.handleClick(GameStatus.Pause) }}
                        variant="primary"
                        size="sm"
                        disabled={status !== GameStatus.Running}>Pause</Button>
                    <Button
                        onClick={() => { this.handleClick(GameStatus.Next) }}
                        variant="primary"
                        size="sm"
                        disabled={status !== GameStatus.Pause && status !== GameStatus.ReadyToStart}>Next</Button>
                </ButtonGroup>
            </div>
        )
    }
};