// Promises

// actually this Promise function's parameter is a callback function which has two parameters
// one is: resolve
// the other one is: reject
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // first, only former one of the resolve or reject will be invoked
    // second, we can handle the parameters by resolve or reject, and the parameters can be more complex than a string
    // the params we pass to resolve(...) --> will be handled to the then(res: this is the parameter of resolve passed)
    // and then() function's inner logic is what we called the handler --> how to handle the success response event;

    // the same, the params we pass to reject(...) --> will be handled to the catch(err: this is the parameter of reject funciton passed)
    // then catch() function's inner logic iw waht we called the handler --> how to handle the fail response event.
    resolve("data back from the server");

    reject({ a: 1, b: 2 });
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
