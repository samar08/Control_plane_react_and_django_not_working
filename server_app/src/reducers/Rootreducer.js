import { combineReducers } from 'redux';
import Clusterinforeducer from './Clusterinforeducer';
import Masterinforeducer from './Masterinforeducer';
import Workerinforeducer from './Workerinforeducer';
const Rootreducer=combineReducers({
    clusterinfo:Clusterinforeducer,
    masterinfo:Masterinforeducer,
    workerinfo:Workerinforeducer,
})
export default Rootreducer;
