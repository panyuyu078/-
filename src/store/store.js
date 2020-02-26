import {createStore} from 'redux';//按需引入
import lizReducer from './lizReducer';

var store = createStore(lizReducer)
export default store