import {createStore, combineReducers} from 'redux'
import {userReducer} from './reducers/userReducers.js'

const singleReducer = combineReducers({
    userReducer,
})



const store = createStore(userReducer)

console.log(store.getState)

export default store