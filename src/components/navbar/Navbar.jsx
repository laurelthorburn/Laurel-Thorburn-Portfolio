import './navbar.css';

//todo: change css styling of navName
export const Navbar = (props) => {
  return (
    <nav className="nav">
        <div className="nav-left">
            <h1 className="navName">hello world</h1>
        </div>
        <div className="nav-right">
            <div className="navItems">
                <span>About Me</span>
                <span>Contact</span>
                <span>Projects</span>
                <span>Resume</span>
            </div>
        </div>
    </nav>
    )
};

export default Navbar;
