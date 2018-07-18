import React from 'react';
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class ClearButton extends React.Component {
    handleClick = () => this.props.store.clearInputs();

    render() {
        return (
            <div onClick={this.handleClick} className="button output-button">
                C
            </div>
        );
    }
}
export default ClearButton;
