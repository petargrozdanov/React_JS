import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {userReducer} from './reducers/userReducers.js'

const singleReducer = combineReducers({
    userReducer,
})



const store = createStore(
    singleReducer,
    applyMiddleware(logger)
)

console.log(store.getState)

export default store