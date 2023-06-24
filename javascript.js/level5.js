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
 