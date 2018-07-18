import React from 'react';
import { observer, inject } from "mobx-react";

const ComputeButton = observer(({ symbol, type, handleClick }) => {
    return (
        <div
            className={`button ${type}-button`}
            onClick={() => handleClick(symbol)}
        >
            {symbol}
        </div>
    );
});

export default ComputeButton;
