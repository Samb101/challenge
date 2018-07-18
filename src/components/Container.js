import React, { Fragment } from "react";
import { observer, inject } from "mobx-react";
import OperationScreen from "./OperationScreen";
import ResultScreen from "./ResultScreen";
import Pad from "./Pad";
import ChooseMode from "./ChooseMode";
import ComputationsList from "./ComputationsList";

@inject("store")
@observer
class Container extends React.Component {
    back = () => this.props.store.reset();

    render() {
        const mode = this.props.store.state.mode;
        const centered = mode !== "admin" ? "centered" : "";
        return mode === "" ? (
            <ChooseMode />
        ) : (
            <div className={`${centered ? "" : "flex-align-items"}`}>
                <span className="back-arrow" onClick={this.back} />
                <div className={`calculator ${centered}`}>
                    <OperationScreen />
                    <ResultScreen />
                    <Pad />
                </div>
                {mode === "admin" && <ComputationsList />}
            </div>
        );
    }
}

export default Container;
