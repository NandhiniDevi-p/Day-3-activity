//---------------------------------ACTIVITY--------------------------------------------------

// ------------------------------DAY-3 Question 01------------------------------------------

//how to comare two json have same property without order

let obj1 = { name: "Person", age: 5 };
let obj2 = { age: 5 ,name: "Person" };

if (obj1.name == obj2.name && obj1.age == obj2.age) { 
    console.log("Both have Same Properties");
} else {
    console.log("Both have Different Properties");
}