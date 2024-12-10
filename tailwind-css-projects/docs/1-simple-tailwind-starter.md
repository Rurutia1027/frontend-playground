# Simple Tailwind Starter

## Introduction of Tailwind CLI

In previous [sandbox-tailwind](../../tailwind-css-sandbox/) we practice series of tailwind simple demo codes, which all of them are based on [Tailwind's CDN](https://tailwindcss.com/docs/installation/play-cdn) which just import it in our HTML's script section, then we can embedded the **tailwind** associated codes and features to our HTML tags. It is the most quick and effective to use and demostrate the features of the tailwind. However, in large or medium projects tailwind cdn is not recommended. Instead, we often choose to use the **[Tailwind CLI](https://tailwindcss.com/docs/installation)** to import the features via **npm** to our packages.

First, we need to install our Node in our development and make sure `npm` command goes right. Then the, type commands below:

```shell
npm init # this generates a package.json file

 # install tailwind and its dependency info will be sync to package.json like maven's pom.xml
npm install i -D tailwindcss # i means installing it as dev dependency

npx tailwindcss init # init our tailwind env and create a config file for us
```

Then, we get our Tailwind coding packages get ready, and commands generate a Tailwind config javascript file: `tailwind.config.js`.

```javascript
// update content which means let tailwind engine looks in source folders
// for any HTML or javascript files that have tailwind classes

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

After above operations, we need to add a [input.css](../simple-tailwind-starter/input.css) to our current path.
And, then we can execute the correspoinding commands with the aim to compile the css file into a compiled [output.css](../simple-tailwind-starter/css/style.css) file.
But, we can also add the compile command as to the package.json to let the npm build to invoke this step.

**npm commands**

```shell
npm run build
// or
npm run watch
```

```json
{
  "name": "simple-tailwind-starter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tailwindcss -i ./input.css -o ./css/style.css",
    "watch": "tailwindcss -i ./input.css -o ./css/style.css --watch"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "i": "^0.3.7",
    "tailwindcss": "^3.4.16"
  }
}
```

After executing `npm run build` we will find corresponding css folder and its inner css file which can be used and imported to the HTML files directly.

## Functions and Directives in Tailwind

## References

- [Tailwind Official Website](https://tailwindcss.com/docs/installation)
