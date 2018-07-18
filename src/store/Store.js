import { observable, computed, action, toJS } from "mobx";
import { OPERANDS } from "../constants";

export default class Store {
    @observable
    state = {
        mode: "",
        currentOperation: "",
        currentResult: "",
        history: [],
        searchTerm: "",
        resultsSearch: computed(() => {
            const searchTerm = toJS(this.state.searchTerm.replace("+", "\\+")); // copy
            const regex = new RegExp(`${searchTerm}`);
            return (
                this.state.history.filter(compute => compute.match(regex)) || []
            );
        })
    };

    @action
    computeResult = () => {
        const validCompute = /^([-+/*]\d+(\.\d+)?)*/;
        if (validCompute.test(this.state.currentOperation)) {
            this.state.currentResult = eval(this.state.currentOperation); // :(
            this.state.history.push(this.state.currentOperation);
        } else {
            this.state.currentResult = "ERROR";
        }
    };

    @action addSymbol = symbol => (this.state.currentOperation += symbol);

    @action updateSearchBar = value => (this.state.searchTerm = value);

    @action
    clearInputs = () => {
        let { state } = this;
        state.currentResult = "";
        state.currentOperation = "";
    };

    @action
    selectMode = mode => {
        this.state.mode = mode;
    };

    @action
    reset = () => {
        this.clearInputs();
        this.selectMode("");
        this.state.mode = "";
        this.state.history = [];
        this.state.searchTerm = "";
    };

    @action
    randomCompute = () => {
        let { state } = this;
        const loop = setInterval(() => {
            state.currentOperation += Math.floor(
                Math.random() * Math.floor(Math.random() * 100000)
            );
            switch (Math.floor(Math.random() * 4)) {
                case 0:
                    return (state.currentOperation += "+");
                case 1:
                    return (state.currentOperation += "/");
                case 2:
                    return (state.currentOperation += "-");
                case 3:
                    return (state.currentOperation += "*");
            }
        }, 100);
        setTimeout(() => {
            clearInterval(loop);
            if (
                [...OPERANDS.values()].includes(
                    state.currentOperation.slice(-1)
                )
            ) {
                state.currentOperation = state.currentOperation.substring(
                    0,
                    state.currentOperation.length - 1
                );
            }
            this.computeResult();
        }, 3000);
    };
}
