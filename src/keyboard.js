import { OPERANDS, NUMBERS } from "./constants";

export default function keyBindings(e, isDev) {
    if (e.target.tagName.toUpperCase() !== "INPUT") {
        if (
            (e.keyCode >= Math.min(...NUMBERS.keys()) &&
                e.keyCode <= Math.max(...NUMBERS.keys())) ||
            e.keyCode === 190
        ) {
            return { type: "number", value: NUMBERS.get(e.keyCode) };
        } else if ([...OPERANDS.keys()].includes(e.keyCode)) {
            return { type: "operand", value: OPERANDS.get(e.keyCode) };
        } else if (e.keyCode === 13) {
            return { type: "compute" };
        } else if (e.keyCode === 32 && isDev) {
            return { type: "monkeys" };
        } else if (e.keyCode === 99) {
            return { type: "clear" };
        }
    }
}
