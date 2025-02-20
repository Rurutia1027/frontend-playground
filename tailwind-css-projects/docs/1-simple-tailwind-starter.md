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

### **Functions**

Tailwind adds a few custom functions you can use in your CSS to access Tailwind-specific values.
These functions are evaluated at build-time, and are repalced by static values in your final CSS.

- **`theme()`**
  Use the `theme()` function to access your Tailwind config values using dot notation.

```css
.content-area {
  height: calc(100vh - theme(spacing.12));
}
```

If you need to access a value that contains a dot (like the `2.5` value in the spacing scale), you can use square bracket notation:

```css
.content-area {
  height: calc(100vh - theme(spacing[2.5]));
}
```

- **`screen()`**
  The `screen()` function allows you to create media queries that reference your breakpoints by name instead of duplicating their values in your own CSS.

```css
@media screen(sm) {
  //
}
```

This will resolve to the underlying screen value at build-time, generating a regular media query that matches specified breakpoint:

```css
@media (min-width: 640px) {
  //
}
```

### **Directives**:

Directives are custom Tailwind-specific [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) you can use in your CSS that offer special functionality for Tailwind CSS projects.

- **`@tailwind`**
  Use the `@tailwind` directive to insert Tailwind's `base`, `components`, `utilities` and `variants` sytles into your CSS.

```css
// This injects Tailwind's base styles and any base styles registered by plugins
@tailwind base;

// This injects Tailwind's component classes and any component classes registered by plugins.
@tailwind components;

// This injects Tailwind's utility classes and any utilitiy classes registered by plugins
@tailwind utilities;

// Use this directive to control where Tailwind injects the hover, focus, responseive, dark mode, and other
// variants of each class.
// If omitted, Tailwind will append these classes to the vary end of your stylesheet by default.
@tailwind variants;
```

- **`@layer`**
  Use the `@layer` directive to tell Tailwind which "bucket" a set of custom styles belongs to. Valid layers are `base`, `components`, and `utilities`.

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    h1 {
      @apply text-2xl;
    }

    h2 {
      @apply text-xl;
    }
  }

  @layer components {
    .btn-blue {
      @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
    }
  }

  @layer utilities {
    .filter-none {
      filter: none;
    }

    .filter-grayscale {
      filter: grayscale(100%);
    }
  }
  ```

  Wrapping any custom CSS with `@layer` also makes it possible to use modifiers with those rules, like `hover:` and `foocus:` or responsive modifiers like `md:` and `lg:`.

  - **`@apply`**
    Use `@apply` to inline any existing utility classes into your own custom CSS.
    This is useful when you need to write custom CSS(like to override the sytles in a third-party library) but still want to work with your design tokens and use the same syntax you're used to using in your HTML.

    ```css
    .select2-dropdown {
      @apply rounded-b-lg shadown-md;
    }

    .select2-search {
      @apply border border-gray-300 rounded;
    }

    .select2-results__group {
      @apply text-lg font-bold text-gray-900;
    }
    ```

    - **`@config`**
      Use the `@config` directive to specify which config file Tailwind should use when compiling that CSS file.
      This is useful for projects that need to use different configuration files for different CSS entry points.

    ```css
    @config "./tailwind.site/config.js"
    
    @tailwind base;
    @tailwind component;
    @tailwind utilities;
    ```

    The path you provide to the `@config` directive is relative to that CSS file, and will take precedence over a path defined in your PostCSS configuraiton or in the Tailwind CLI.

    **Don't put `@config` before your `@import` statement!!**

## References

- [Tailwind Installation](https://tailwindcss.com/docs/installation)
- [Functions and Directives](https://tailwindcss.com/docs/functions-and-directives)
