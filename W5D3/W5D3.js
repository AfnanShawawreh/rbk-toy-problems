/*
You were put in charge of ordering for tonight's company get-together, 
and you were given a data set with people's meal preferences and dietary restrictions. 
Write a function called orderAVegetarianDish that takes  an array of empoloyee objects, 
and returns true if at least 1 person is listed "vegetarian" on their "mealPreferences". 
Otherwise, your function should return false.

var staffA = [
  {
    name: "Lia",
    department: "Human Resources",
    dietaryRestrictions: [],
    mealPreferences: "no preferences"
  },
  {
    name: "Sebastian",
    department: "Engineering",
    dietaryRestrictions: ["dairy free", "gluten free"],
    mealPreferences: "vegetarian"
  },
  {
    name: "Ari",
    department: "Executive",
    dietaryRestrictions: ["dairy free"],
    mealPreferences: "vegetarian"
  },
  {
    name: "Martha",
    department: "Legal",
    dietaryRestrictions: ["nut allergies"],
    mealPreferences: "non-vegetarian"
  }
];
Calling your function should result in:

orderAVegetarianDish(staffA); //true
*/

orderAVegetarianDish(staffA); //true


// your answer is here 

  function each(coll, f) {
  if (Array.isArray(coll)) { 
    for (var i = 0; i < coll.length; i++) { 
      f(coll[i], i); 
    } 
  } else { 
     for (var key in coll) { 
       f(coll[key], key); 
     } 
   } 
 } 
function map(array, f) {
    var acc = [] //to hold the new arr 
    each(array, function(element, i) {
        acc.push(f(element, i))
    })
    return acc
}
function reduce(array, f, start) {
var acc = start;
each(array,function(element){
  acc=f(acc,element)
})
return acc;
}

function orderAVegetarianDish(array){
       
  return  map(array,function(obj,key){
     
              var rr=Object.values(obj)
             
            return reduse( rr,function(element)


            )) 
  }
)

}
// if(obj.key === 'vegetarian'){
//              arr.push[obj.key]
//              }
//              if(arr.length>=1){
//                      return true
//              } false
}