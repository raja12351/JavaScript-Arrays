let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  for(let i in arr){
    if(arr[i].profession=='developer'){
      console.log(arr[i]);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let newArr = { id:4, name:"susan", age:"20", profession:"intern" };
  arr.push(newArr);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredEmployees = arr.filter(arr => arr.profession !== "admin");
  console.log(filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  let additionalArr = [
    {id: 5, name:"rajat", age:"25", profession:"developer" },
    {id: 6, name:"sandeep", age:"24", profession:"developer" },
  ];
  arr = arr.concat(additionalArr);
  console.log(arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
