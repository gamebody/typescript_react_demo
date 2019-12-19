import { setInputValueAction } from "../actions";


const input = (state = "", action: setInputValueAction) => {
    switch (action.type) {
        case "SET_INPUT_VALUE":
            return action.value
        default:
            return state
    }
}

export default input
