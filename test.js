// Change code below this line
function add(...args) {
  
  let sum = 0;
  for (const arg of args) {
    console.log(arg);
  	 sum += arg;
  }
  console.log(sum);
  return sum;
  // Change code above this line
}
add(1, 2, 3);
//console.log(sum);