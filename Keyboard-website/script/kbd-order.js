// custom kbd order, each value of object is array, 1st item = name 2nd item = price


if (!localStorage.getItem('orderList')) {
  localStorage.setItem('orderList', JSON.stringify([]))
};




const order = {
  name: 'Custom Board',
  case: ['cherry case', 34],
  pcb: ['rgb pcb', 25],
  switch: ['black linear switches', 16],
  keycap: ['PBT keycaps', 20],
  finished: true
};


const addOrderList = function(order) {
  const orderList= JSON.parse(localStorage.getItem('orderList'));
  orderList.push(order);
  localStorage.setItem('orderList', JSON.stringify(orderList));
  console.log(orderList);    
}


addOrderList(order)