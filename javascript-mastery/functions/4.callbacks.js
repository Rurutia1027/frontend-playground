// Callbacks
const greetUser = (username, callback) => {
  console.log(callback(username));
};

greetUser("Sebby");

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
