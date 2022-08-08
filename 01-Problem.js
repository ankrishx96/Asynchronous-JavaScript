console.log("Before");

let callname = callmyName("Ankrish");
console.log(callname); //? Show Undefined

console.log("After");

function callmyName(name) {
  setTimeout(() => ({ name }), 2000);
}
