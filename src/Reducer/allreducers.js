import todosreducer from "./taskreducer"
import {combineReducers} from 'redux'
const allreducers = combineReducers({
    todos:todosreducer
})
export default allreducers