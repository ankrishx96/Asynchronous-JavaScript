//? Promise Resolve
const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

//? Promise Reject
const r = Promise.reject(new Error("Something Fails"));
r.catch((err) => console.log(err.message));
