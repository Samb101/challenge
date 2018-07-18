import React from 'react';
import { observer, inject } from "mobx-react";

const OperationScreen = inject("store")(
    observer(({ store: { state } }) => {
        return (
            <div className="screen">
                <div>{state.currentOperation}</div>
            </div>
        );
    })
);

export default OperationScreen;
