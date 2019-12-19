import { visibilityFilters, setVisibilityFilterAction, Filter } from "../actions";

export default (state = visibilityFilters.SHOW_ALL as Filter, action: setVisibilityFilterAction): Filter => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter
        default:
            return state
    }
}
