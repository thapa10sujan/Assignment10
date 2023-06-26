// Q1 find if hari is in allUsers array or not/
//expected output is : 
//true

const name = 'hari';
const allUsers = ['shyam', 'thakur', 'hari'];

if (allUsers.includes(namee)) {
  console.log (true);
} else {
  console.log (false);
}

 
 

//Q2 find number of duplicates
//expected output is : 2
//true

const user = 'hari';
const userArr = ['hari', 'shyam', 'hari', 'thakur'];



let num = 0;
for (let i = 0; i<userArr.length; i++) {
  if (userArr[i] == user) {
    num++;
  }
}

console.log(num);
