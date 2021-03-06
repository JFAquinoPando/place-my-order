import { DefineMap, DefineList, superModel, QueryLogic } from 'can';
import loader from '@loader';
import { ItemsList } from "./item";
const Status = QueryLogic.makeEnum(["new", "preparing", "delivery", "delivered"]);
import io from 'steal-socket.io';
const Order = DefineMap.extend('Order', {
  seal: false
}, {
  '_id': {
    type: 'any',
    identity: true
  },
  name: 'string',
  address: 'string',
  phone: 'string',
  restaurant: 'string',

  status: {
    default: 'new',
    Type: Status
  },
  items: {
    Default: ItemsList
  },
  get total() {
    let total = 0.0;
    this.items.forEach(item =>
        total += parseFloat(item.price));
    return total.toFixed(2);
  },
  markAs(status) {
    this.status = status;
    this.save();
  }
});

Order.List = DefineList.extend('OrderList', {
  '#': Order
});

Order.connection = superModel({
  url: 'http://localhost:7070/orders',//loader.serviceBaseURL + '/api/orders',
  Map: Order,
  List: Order.List,
  name: 'order'
});
//loader.serviceBaseURL
const socket = io('http://localhost:7070');

socket.on('orders created', order => Order.connection.createInstance(order));
socket.on('orders updated', order => Order.connection.updateInstance(order));
socket.on('orders removed', order => Order.connection.destroyInstance(order));

export default Order;
