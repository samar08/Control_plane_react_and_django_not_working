import {createStore} from 'redux';
import Rootreducer from "./reducers/Rootreducer";
const store=createStore(
    Rootreducer
)
export default store;
