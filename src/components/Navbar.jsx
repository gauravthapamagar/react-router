import { NavLink } from "react-router-dom"
//this is responsible for not refreshing in the browser
const Navbar = () => {
  return (
    <div>
      <nav>
      <NavLink className={(e)=> {return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
      <NavLink className={(e)=> {return e.isActive?"red":""}} to="/About"><li>About</li></NavLink>
      <NavLink className={(e)=> {return e.isActive?"red":""}} to="/Login"><li>Login</li></NavLink>
      </nav>

    </div>
  )
}

export default Navbar