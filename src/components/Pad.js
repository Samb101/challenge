import React from "react";
import { observer, inject } from "mobx-react";
import { OPERANDS, NUMBERS } from "../constants";

import ComputeButton from "./ComputeButton";
import EqualsButton from "./EqualsButton";
import ClearButton from "./ClearButton";
import keyBindings from "../keyboard";

@inject("store")
@observer
class Pad extends React.Component {
    componentDidMount() {
        document.addEventListener("keypress", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.handleKeyPress);
    }

    handleClick = symbol => this.props.store.addSymbol(symbol);

    handleKeyPress = e => {
        const { store } = this.props;
        const isDev = store.state.mode === "dev";
        const { type, value } = keyBindings(e, isDev);
        switch (type) {
            case "compute":
                return store.computeResult();
            case "clear":
                return store.clearInputs();
            case "monkeys":
                return store.randomCompute();
            default:
                return this.handleClick(value);
        }
    };

    render() {
        return (
            <div className="pad">
                <div className="pad-numbers-buttons">
                    {Array.from(NUMBERS, ([key, value]) => (
                        <ComputeButton
                            key={key}
                            handleClick={this.handleClick}
                            type={"number"}
                            symbol={value}
                        />
                    ))}
                </div>
                <div className="pad-operands-buttons">
                    {Array.from(OPERANDS, ([key, value]) => (
                        <ComputeButton
                            key={key}
                            handleClick={this.handleClick}
                            type={"operand"}
                            symbol={value}
                        />
                    ))}
                </div>
                <div className="pad-outputs-buttons">
                    <ClearButton />
                    <EqualsButton />
                </div>
            </div>
        );
    }
}

export default Pad;
