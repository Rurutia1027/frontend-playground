// Callbacks
const greetUser = (username, callback) => {
  console.log(callback(username));
};

greetUser("Sebby", (username) => {
  return "Hello username " + username;
});

// Understand Callback in Javascript
// Actually callback in javascript is 1. passing function pointer to another function
// 2. invoke the function pointer pointed function body at specific time in the outer function
// there are two kinds of callback functions, one is function pointer without any parameters.
// the other is callback functions with some specified parameters.
// let's say the outer function as the outer_func, and the inner function the callback function as the inner_callback_func
// then, scenraio-one:
// suppose the inner_callback_func is an operator to update a database flag status, and the outer_func is some calculate logic implementer
// then, we invoke the funciton like: outer_func(datasets_varabiles, inner_callback_func)
// when outer_func manipulate the datasets calculation, and finish its logic, it require update the finish status to database for exmaple
// then at this time it invokes the inner_callback_func then this callback function will be executed, and update the status to the database.
// ---
// then scenario - two: callback function with parameters,
// still we have the outer_func(raw_datasets, inner_callback_func) and the inner_callback_func(dataframes),
// in the scope of the outer_func, we do some transfer and filter modify the raw_datasets -> dataframes
// and we want to synchornize the dataframes to other message systems or databases or submit series of computing jobs to clusters for example...
// then, we invoke the inner_callback_func and 'feed' the outer_func converted result items of dataframes to it.
// then the inner_callback_func will continue process the dataframes like sync them to db, or other streaming system or converted the dataframes to other computing tasks

// from my opinion, i think the callback functions are trying to maintain the minimum execution isolation so that their logic can be maintained and implemented de-coupled from other business logics.

// callback scenario-1: callback without any parameters
const outer_func = (datasets_raw, inner_callback_func) => {
  console.log("[outer_func]:receive raw datasets begin filter and transfer");
  console.log(
    "[outer_func]:raw datasets filter and transfer finished, begin to sync status to databse"
  );
  if (inner_callback_func()) {
    console.log("[outer_func]:status to databse success!");
  } else {
    console.log("[outer_func]:status to databse failed!");
  }
};

const inner_callback_func = () => {
  console.log(
    "\t\t[inner_callback_func] ===> raw datasets filter and transfer is finish begin update database dataset_status table"
  );
  // mock db operations
  console.log(
    "\t\t[inner_callback_func] ===> raw datasets finish status already synchornized to database dataset_status table"
  );

  return true;
};

console.log("--- invoke callback func without any params");
outer_func({}, inner_callback_func);

// callback scenario-2: callback with parameters
const outer_function = (datasets_raw, inner_callback_function) => {
  let dataframes = datasets_raw.dataframes;
  console.log(
    "[outer_function]:receive raw datasets " +
      JSON.stringify(datasets_raw, null, 1) +
      " begin filter and transfer"
  );
  console.log(
    "[outer_function]:raw datasets filter and transfer finished, got dataframes " +
      JSON.stringify(dataframes, null, 1)
  );
  console.log(
    "[outer_function]:begin to submit dataframes to message broker-A "
  );

  if (inner_callback_function(dataframes)) {
    console.log(
      "[outer_funcion] dataframes successfully send to message broker-A"
    );
  } else {
    console.log(
      "[outer_function] dataframes failed to send to message broker-A, begin retry..."
    );
  }
};

console.log("");
console.log("");
console.log("--- invoke callback func with parameter(s)");

const inner_callback_function = (dataframes) => {
  console.log(
    "\t\t[inner_callback_function] ===> preapre send messages of dataframes to message broker-A"
  );
  // mock db operations
  console.log(
    "\t\t[inner_callback_function] ===> dataframes\n" +
      JSON.stringify(dataframes, null, 1) +
      "\nare sent to message brokder-A successfully!"
  );

  return true;
};

const datasets_raw = {
  timestamp: "tiemstampesxxx",
  id: "dataset id",
  traceids: ["1", "2"],
  dataframes: {
    dataframe1: {},
    dataframe2: {},
  },
};

outer_function(datasets_raw, inner_callback_function);
