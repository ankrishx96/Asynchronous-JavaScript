function setuser(id, name, callback) {
  setTimeout(() => {
    callback({ id, userName: name });
  }, 2000);
}

function gethobbies(username, callback) {
  setTimeout(() => {
    if (username == "Ankrish") {
      callback(["Gaming", "Listning", "Running", "Swimming"]);
    } else callback(`You are not ${username}`);
  }, 2000);
}

function user(res) {
  gethobbies(res.userName, hobbies);
}

function hobbies(res) {
  console.log(res);
}

setuser(10, "Ankrish", user);
