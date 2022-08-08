const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, fname: "Ankrish", lname: "Kandpal" });
    reject(new Error("Reject State"));
  }, 2000);
});

promise
  .then((res) => console.log(res.fname)) //? Ankrish
  .catch((err) => console.log(err.message));
