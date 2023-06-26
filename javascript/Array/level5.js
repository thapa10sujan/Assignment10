const arr = [2,5,6,7]
//calculate the sum of the array using either for of or for in

const array = [2, 5, 6, 7];
let sum = 0;

for (const number of array) {
  sum = sum + number ;
}

console.log(sum);


const users =['hari', 'shyam', 'hari']
//hint: how to know hari was already there in users array

users.splice (2,3)
users.include ('hari')




const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array


let summ = 0;
newArr.forEach(innerArr => {
  innerArr.forEach(num => {
    if (num % 2 != 0) {
      sum = sum + num;
    }
  });
});

console.log(sum);
 




const myDetails = [
    {id:3, name: 'hari'},
   {id:5, name: 'shyam'},
   {id:6, name: 'gopal'},
 
  ]

myDetails.map((item)=>{
  return item.id 

})
 
  // return only array of ids: expected output  [3,5,6]
 
 

  //loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]


 const userDetails = [
    {score:8, name: 'hari' , marks : [10,3,23]},
    {score:8, name: 'shyam' , marks : [50,23,23]},
    {score:8, name: 'shyam' , marks : [20,13,43]},
   
  ]
  userDetails.map((item)=>{
     let sum= 0
     item.marks.map((value)=>{
       sum = sum + value
     })
 item.score= sum
    return item
    
  })
 

  
 
   
