// Async Await
const customers = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 2_000_000_000) i++;
    resolve([
      { name: "Sebby", id: 1 },
      { name: "Hale", id: 2 },
    ]);
  });
});

const addresses = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    reject("opps got an error in addresses promise");
    let i = 0;
    while (i < 5_000_000_000) i++;
    resolve([
      {
        customerId: 1,
        address: "London",
      },
      {
        customerId: 2,
        address: "USA",
      },
    ]);
  });
});

// const fetchData = () => {
//   customers
//     .then((c) => {
//       addresses
//         .then((a) => {
//           console.log(c);

//           console.log(a);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// this expression to invoke promise is recommended
// async + await in stead of previous expression
const fetchData = async () => {
  try {
    const c = await customers;
    const a = await addresses;

    console.log(c);
    console.log(a);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
