import './navbar.scss';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return(
        <>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='sect_links'>
                    <div className='sect_link'>
                        <h1>Home</h1>
                    </div>
                    <div className='sect_link'>
                        <h1>About</h1>
                    </div>
                    <div className='sect_link'>
                        <h1>Projects</h1>
                    </div>
                    <div className='sect_link'>
                        <h1>Resume</h1>
                    </div>
                    <div className='sect_link'> 
                        <h1>Blog</h1>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;