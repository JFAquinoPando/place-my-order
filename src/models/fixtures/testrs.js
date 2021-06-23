import { fixture } from 'can';
import Testr from '../testr';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}], Testr.connection.queryLogic);

fixture('/testr/{id}', store);

export default store;
