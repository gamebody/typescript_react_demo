import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import input from "./reducers/input";
import todos from './reducers/todos'
import visibilityFilter from "./reducers/visibilityFilter";


const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    input
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch

export default store
