const itemObjsList = [
  { name: 'rice', price: 5 },
  { name: 'book', price: 20 },
  { name: 'chicken', price: 10 },
  { name: 'monitor', price: 100 },
];

// the reduce func takes 2 args
// 1st one is a func, 2nd is the starting point. in this case, the starting point is initialValue
// in the func, the 1st arg is something called an accumulator, it is something we reducing the value in the array down to
// the 2nd arg is just each individual item
// how it works is the initialValue will be passed to valueAccumulator at the first time we go through our loop
// then whatever return from reduce would be the value for the next iteration
const initialValue = 0;
const totalPrice = itemObjsList.reduce((valueAccumulator, item) => {
  return valueAccumulator + item.price;
}, initialValue);

console.log(totalPrice);
