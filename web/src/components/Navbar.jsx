import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary navbar-expand-md" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Todos
        </Link>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbar-menu">
          <div className="navbar-nav">
            <NavLink to="/todos/new" className="nav-link">
              Create a Todo
            </NavLink>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;