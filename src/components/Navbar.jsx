import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="navbar">
    <h2>Logo</h2>
    <ul>
      <li>
        <Link  to="/">Home</Link >
      </li>
      <li>
        <Link   to="/about">About</Link >
      </li>
      <li>
        <Link  to="/shop">Shop</Link >
      </li>
      <li>
        <Link  to="/shop">Shop</Link >
      </li>
      <li>
        <Link  to="/counter">Counter</Link >
      </li>
    </ul>
  </div>
  )
}

export default Navbar