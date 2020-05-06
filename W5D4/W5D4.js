/*

Exercise 1
Currently, you have a budget of $100. You have a shopping list in decreasing priority, 
and you want to report how many items you bought and how much it cost you. 
Write a function called shoppingSummary that takes an array of shopping items (objects), 
and returns a string with the number of items you bought, and the total amount you spent.

Notes:

You cannot spend more than your budget ($100).
You have enough room for all the items (if you end up buying everything), 
so there's no item limit -- your only limit is your budget.
The list is mentioned to be in "decreasing priority" simply because you do not have to sort the input array
 to optimize for anything else.
 So do not worry about coming up with any other sorting algorithm for the most "bang for your buck" or what not :-)
Take for example the data below:

var shoppingList = [
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "cookware",
    price: 79.99,
    weightInPounds: 35
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];
Calling your function should result in:

shoppingSummary(shoppingList); //"I got 3 items at $99.73

*/
function each(coll,f){
  if(Array.isArray(coll)) {
    for(var i = 0; i < coll.length; i++){
      f(coll[i], i)
      }
    }else {
        for(var key in coll) {
            f(coll [key],key)
             } 
        }
function reduce(array, f, start) {
  var acc = start;
  each(array,function(element){
    acc=f(acc,element)
  })
  return acc;
  }
function shoppingSummary( arrayList){

 return reduse(arrayList,function(result,items,i){
 
   return 'I got ' + i + 'items at'+ result + items.price 
 },0)
}
/*
Exercise 2
Suppose that you wanted to take out the most expensive item on your shopping list. 
Write a function called removeMostExpensive 
which returns a new array without the most expensive thing in the list. 
Your function should preserve the order of the items in this array.

removeMostExpensive(shoppingList);
Would return a new array with the following elements:

[
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];
//notice that the element with "cookware" is missing

 */

//your answer is here
function filter(array, predicate) {
    
  var acc=[];
  each(array,function(element,i){
    if(predicate(element,i)){
      acc.push(element);
    }
  });
  return acc;
}



function removeMostExpensive(array){
  return filter (array,function(obj){
    obj.price > 
  })
}
