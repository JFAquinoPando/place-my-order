import { fixture } from 'can';
import Item from '../item';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}], Item.connection.queryLogic);

fixture('/item/{id}', store);

export default store;
