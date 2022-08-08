function setuser(id, name, callback) {
  setTimeout(() => {
    callback({ id, userName: name });
  }, 2000);
}

function gethobbies(username, callback) {
  setTimeout(() => {
    if (username == "Ankrish") {
      callback(["Gaming", "Listning", "Running", "Swimming"]);
    } else callback(`You are not Ankrish`);
  }, 2000);
}

setuser(10, "Ankrish", (user) => {
  gethobbies(user.userName, (hobbies) => console.log(hobbies));
});
