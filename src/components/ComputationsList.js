import React, { Fragment } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class ComputationsList extends React.Component {
    handleChange = e => this.props.store.updateSearchBar(e.target.value);

    render() {
        const { state } = this.props.store;
        return (
            <Fragment>
                <div className="computes-list">
                    <div> Search </div>
                    <input
                        onChange={this.handleChange}
                        value={state.searchTerm}
                    />
                    {!!state.searchTerm &&
                        !!state.resultsSearch.length && (
                            <Fragment>
                                <div> Results </div>
                                <hr />
                                <ul>
                                    {state.resultsSearch.map(result => (
                                        <li> {result} </li>
                                    ))}
                                </ul>
                            </Fragment>
                        )}
                    <hr />
                    <div> Past computations </div>
                    <ul>
                        {!!state.history.length &&
                            state.history.map((compute, index) => (
                                <li key={index}>{compute}</li>
                            ))}
                    </ul>
                </div>
            </Fragment>
        );
    }
}
export default ComputationsList;
