import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar p-2 navbar-expand-md text-bg-danger navbar-dark container bg-gradient text-dark rounded-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">TODO APP</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ><i class="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <NavLink className='btn btn-warning w-15' to='/add/todo'>Add TODO</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;