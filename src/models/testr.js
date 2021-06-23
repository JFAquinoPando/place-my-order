import { DefineMap, DefineList, superModel } from 'can';
import loader from '@loader';

const Testr = DefineMap.extend('Testr', {
  seal: false
}, {
  'id': {
    type: 'any',
    identity: true
  }
});

Testr.List = DefineList.extend('TestrList', {
  '#': Testr
});

Testr.connection = superModel({
  url: loader.serviceBaseURL + '/testr',
  Map: Testr,
  List: Testr.List,
  name: 'testr'
});

export default Testr;
