# Functions and Directives

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
