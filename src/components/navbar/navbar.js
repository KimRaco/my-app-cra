
import logo from '../../images/logo.svg'

const Navbar = () => {
    return(
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo}></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Features
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Company
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    
                        <li className="nav-item">
                        <a className="nav-link" href="#">Careers</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                        </li>
                        
                        </ul>

                       
                </div>
                        <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-secondary border border-0" type="submit">Login</button>
                        <button className="btn btn-outline-secondary rounded-start-2 ms-3" type="submit">Register</button>

                        </div>

            </div>
        </nav>
    </div>
    )
}

export default Navbar