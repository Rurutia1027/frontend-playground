// Promise example

// we need to delcare the type as module in package.json
// so that we can use import axios from "axios";
import axios from "axios";

axios
  .get("https://api.chucknorris.io/jokes/random")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

const fetchJoke = async (url) => {
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.log(err);
  }
};

console.log("async await invoke axio:");
const url = "https://api.chucknorris.io/jokes/random";
fetchJoke(url);
