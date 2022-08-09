# Asynchronous JavaScript

## Callbacks
A callback function is a function passed into another function as an argument. Problem :  It create a deep down tree structure which makes our code complex to read.

    function setuser(id, name, callback) {
      setTimeout(() => {
        callback({ id, userName: name });
       }, 2000);
     }

    function gethobbies(username, callback) {
      setTimeout(() => {
        if (username == "Ankrish") {
          callback(["Gaming", "Listning", "Running", "Swimming"]);
        } 
        else callback(`You are not Ankrish`);
      }, 2000);
    }

    setuser(10, "Rahul", (user) => {
      gethobbies(user.userName, (hobbies) => console.log(hobbies));
    });

## To make our code cleaner we use Named function

    setuser(10, "Ankrish", user);

    function user(res) {
      gethobbies(res.userName, hobbies);
    }

    function hobbies(res) {
      console.log(res);
    }

## Promise
Hold the eventual result of an async operation.

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 1, fname: "Ankrish", lname: "Kandpal" });
        reject(new Error("Reject State"));
      }, 2000);
    });

    promise.then((res) => console.log(res.fname)).catch((err) => console.log(err.message));

## Replacing Promise with Callback

    function setuser(id, name) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ id, userName: name });
        }, 2000);
      });
    }

    function gethobbies(username) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username == "Ankrish") {
            resolve(["Gaming", "Listning", "Running", "Swimming"]);
          } else resolve(`You are not Ankrish`);
        }, 2000);
      });
    }

## Consuming Promises
    setuser(10, "Ankrish").then((user) =>
      gethobbies(user.userName).then((hobbies) => console.log(hobbies))
    );

## Promise Resolve
    const p = Promise.resolve({ id: 1 });
    p.then((result) => console.log(result));

## Promise Reject
    const r = Promise.reject(new Error("Something Fails"));
    p.catch((err) => console.log(err.message));

## Parallel Promise
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

    Promise.all([p1, p2]).then((result) => console.log(result)); // Completely failed if one of the promise will reject
    Promise.race([p1, p2]).then((result) => console.log(result)); // Resolve only one promise. Return the promise which resolve first

## Async Await Helps to write async code as sync code
    function setuser(id, name) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ id, userName: name });
        }, 2000);
      });
    }

    function gethobbies(username) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username == "Ankrish") {
            resolve(["Gaming", "Listning", "Running", "Swimming"]);
          } else resolve(`You are not Ankrish`);
        }, 2000);
      });
    }

    async function caller() {
      const user = await setuser(10, "Ankrish");
      const hobbies = await gethobbies(user.userName);
      console.log(hobbies);
    }

    caller();
