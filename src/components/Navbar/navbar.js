import './navbar.scss';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return(
        <>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <img src={logo} alt='logo' />
                </div>
            </nav>
        </>
    )
}

export default Navbar;