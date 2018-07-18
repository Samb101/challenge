import React from 'react';
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class EqualsButton extends React.Component {
    handleClick = () => this.props.store.computeResult();

    render() {
        return (
            <div onClick={this.handleClick} className="button output-button">
                =
            </div>
        );
    }
}

export default EqualsButton;
