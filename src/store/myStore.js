import {createStore} from 'redux'; 
import sentReducer from '../reducers/myReducers'

const myStore = createStore(sentReducer);

export default myStore;