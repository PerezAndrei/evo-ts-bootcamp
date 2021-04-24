import { Alert } from "react-bootstrap";
import { StatusProps } from "../types/componentTypes";

export function Status(props: StatusProps) {
    return (
        <div className="status">
            <Alert variant="primary">
                <span>{props.status}</span>
            </Alert>
        </div>
    )
}