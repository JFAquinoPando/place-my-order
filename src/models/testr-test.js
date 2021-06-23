import QUnit from 'steal-qunit';
import Testr from './testr';

QUnit.module('models/testr');

QUnit.test('getList', function(){
  stop();
  Testr.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.item(0).description, 'First item');
    start();
  });
});
