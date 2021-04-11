import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export class ControlPanel extends React.Component {
    render() {
        return (
            <div className="control-panel">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary">Reset</Button>
                    <Button variant="primary">Start</Button>
                </ButtonGroup>
            </div>
        )
    }
};