import {createStore,combineReducers} from 'redux';//按需引入
import lizReducer from './lizReducer';
import partReducer from './partReducer';
var rootReducer = combineReducers({lizReducer,partReducer});
var store = createStore(rootReducer)
export default store