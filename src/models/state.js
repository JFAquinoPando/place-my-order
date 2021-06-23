import { DefineMap, DefineList, superModel } from 'can';
import loader from '@loader';

const State = DefineMap.extend('State', {
  seal: false
}, {
  'short': {
    type: 'any',
    identity: true
  }
});

State.List = DefineList.extend('StateList', {
  '#': State
});

State.connection = superModel({
  url: 'http://localhost:7070/states',//loader.serviceBaseURL + '/states',
  Map: State,
  List: State.List,
  name: 'state'
});

export default State;
