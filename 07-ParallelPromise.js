const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async Operation 1");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async Operation 2");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2]).then((result) => console.log(result)); //? Completely failed if one of the promise will reject
Promise.race([p1, p2]).then((result) => console.log(result)); //? Resolve only one promise. Return the promise which resolve first
