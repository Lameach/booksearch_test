import { combineReducers, createStore } from 'redux'
import initialState from './initialState';
import query from './reducers/query'
import list from './reducers/list'

const store = createStore(combineReducers(query, list), initialState);

export default store;