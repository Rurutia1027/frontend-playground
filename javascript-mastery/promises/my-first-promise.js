// Promises

// actually this Promise function's parameter is a callback function which has two parameters
// one is: resolve
// the other one is: reject
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data back from the server");
  }, 3000);

  setTimeout(() => {
    reject("failed to get data from server");
  }, 5000);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("done");
  });
