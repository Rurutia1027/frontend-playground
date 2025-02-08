# Project unstyled-markup 

## Setup Project 
- command 
  
```bash 
npm create vite@latest unstyled-markup -- --template react-ts

cd unstyled-markup

npm install 
```

## Install Tailwind CSS 
- command
  
```bash 
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p # generate tailwind.config.js and postcss.config.js 
```

## Config Tailwind 

### Edit `tailwind.config.js` 
```js 
// import type { Config } from 'tailwindcss'; 

const config: Config = {
    conent: [
        './index.html',
        './src/**/*.{js,ts,jsx,txs}',
    ], 
    theme: {
        extend: {}, 
    },
    plugins: []
}; 

export default config; 
```

### Edit `src/index.css`

- Create or Update `src/index.css` 

```css 
@tailwind css; 
@tailwind components; 
@tailwind utilities; 
```

### Edit `src/main.tsx`

```tsx 
import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App.tsx'; 
import './index.css'; // here we import the Tailwind style 

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
); 
```

## Setup Project 
```bash 
npm run dev 
```