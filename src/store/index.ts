import { combineReducers, createStore } from 'redux'

import input from "./reducers/input";
import todos from './reducers/todos'
import visibilityFilter from "./reducers/visibilityFilter";


const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    input
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch

export default store
