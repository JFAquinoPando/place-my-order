import QUnit from 'steal-qunit';
import Item from './item';

QUnit.module('models/item');

QUnit.test('getList', function(){
  stop();
  Item.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.item(0).description, 'First item');
    start();
  });
});
