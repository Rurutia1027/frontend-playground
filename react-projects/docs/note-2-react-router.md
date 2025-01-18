# Notes for _React Router_

## Key Concepts of React Router

### Routes

- Define the mapping between URLs and components
- Declared using `<Route>` or `<Routes>`
- Example

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
;<Router>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
  </Routes>
</Router>
```

### Router

- Wrapping the app in a `<BrowserRouter>`, `<HashRouter>` or `<MemoryRouter>` provides the routing context.
- **BrowserRouter** uses the HTML5 History API (e.g., pushState) for clean URLs.
- **HashRouter** uses hash-based URLs(e.g., /#/about).
- **MemoryRouter** is used for testing or environments without a browser.

### Navigation

- Use `<Link>` or `useNavigate()` for navigation.
- Example:

```jsx
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()

  return (
    <div>
      <Link to='/'>Home</Link>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  )
}
```

### Dynamic Routes

- Allow routing with dyanmic parameters using `:` in the path.

```jsx
<Route path='/user/:id' element={<User />} />
```

- Access dynamic parameters with `userParameters()`

```jsx
import { useParams } from 'react-router-dom'

function User() {
  const { id } = useParams()
  return <h1>User ID: {id}</h1>
}
```

### Outlet

- Enable nested routing by rendering child routes.
- Example

```jsx
;<Routes path='/dashboard' element={<Dashboard />}>
  <Route path='settings' element={<Settings />} />
  <Route path='profile' element={<Profile />} />
</Routes>

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> // Render child routes here
    </div>
  )
}
```

---

## React Router Lifecycle

---

## Things to Notice During Development

---

## Common Issues and Debugging Tips

- **Route Not Matching**: Ensure paths are defined correctly and consider adding a training slash if URLs do not match as expected.
- **Memory Leaks**: Ensure to clean up effects like subscriptions, intervals, or listeners in unmounted components.
- **Nested Routes**: Use `<Outlet>` correctly to render child routes.
