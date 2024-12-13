// Try && Catch && Finally in JavaScript
const valid_json = '{"a": "b"}';
const invalid_json = '{"a": }';

try {
  console.log("json string is parsed correctly: " + JSON.parse(valid_json));
} catch (error) {
  console.log("json string is invalid here are the details of the error");
  console.log(error.message);
} finally {
  console.log(
    "no matter JSON#parse goes right or not right finally's inner logic will always be invoked"
  );
}

console.log();
console.log();

try {
  console.log("json string is parsed correctly: " + JSON.parse(invalid_json));
} catch (error) {
  console.log("json string is invalid here are the details of the error");
  console.log(error.message);
} finally {
  console.log(
    "no matter JSON#parse goes right or not right finally's inner logic will always be invoked"
  );
}
