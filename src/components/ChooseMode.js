import React from 'react';
import { observer, inject } from "mobx-react";
import { MODES } from "../constants";

@inject("store")
@observer
class ChooseMode extends React.Component {
    handleClick = mode => this.props.store.selectMode(mode);

    render() {
        return (
            <div className="modes centered">
                {MODES.map((mode, index) => (
                    <div key={index} onClick={() => this.handleClick(mode)}>
                        {mode}
                    </div>
                ))}
            </div>
        );
    }
}
export default ChooseMode;
