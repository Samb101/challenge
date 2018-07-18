import React from 'react';
import { observer, inject } from "mobx-react";


const ResultScreen = inject("store")(
    observer(({ store: { state } }) => {
        return (
            <div className="screen">
                <div>{state.currentResult}</div>
            </div>
        );
    })
);

export default ResultScreen;
