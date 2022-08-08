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

//? Consuming Promise
setuser(10, "Ankrish").then((user) =>
  gethobbies(user.userName).then((hobbies) => console.log(hobbies))
);
