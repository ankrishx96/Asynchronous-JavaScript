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
      } else resolve(`You are not ${username}`);
    }, 2000);
  });
}

async function caller() {
  const user = await setuser(10, "Ankrish");
  const hobbies = await gethobbies(user.userName);
  console.log(hobbies);
}

caller();
