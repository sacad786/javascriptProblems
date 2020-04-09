// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600 

// function getBudgets(arr) {
//     let totalAge = 0
//     let totalBudget = 0
//     for(i=0; i<arr.length; i++){
//         totalAge +=  arr[i].age
//         totalBudget += arr[i].budget
//     }
//      let total = {
//          totalAge,
//          totalBudget
//      }
//     // console.log(totalAge)

//     console.log( total)
// }
// return an object with totalBudget and totalAge
// getBudgets([{ name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 0 },
//   { name: "Martin",  age: 16, budget: 0 }])

//   let myObj = { 
//       name: "ziyaad", 
//       age:29, 
//       location: "cape town", 
//       married: false, 
//       bald: true, 
//       rich: false,
//       photos: {}


//     }

//     // create variables age and location and let their value
//     // equal to that of the object
//     // in other words, extract age and location form obj

//     // const age = myObj.age
//     // const location = myObj.location
//     // const bald = myObj.bald
//     const { age, location, bald,rich } = myObj

//     console.log(age,location,bald,rich)

//     const gender = 'female'
//     const salary = '50k'

//     let obj = {
//         gender,
//         salary
//     }

//     console.log(obj)


let myObj = { 
    name: "ziyaad", 
    age:29, 
    location: "cape town", 
    married: false, 
    bald: true, 
    rich: false,
    photos: {}
  }

  myObj.name = "sacad"
  myObj.salary = "50k"
  delete myObj.bald
  const {rich,location,married} = myObj
  console.log(rich,location,married)
  console.log(myObj)
