import './navbar.scss';
import logo from '../../assets/logo.png';
import { Home } from 'styled-icons/boxicons-regular';
import { Person } from 'styled-icons/bootstrap';
import { ClipboardCode } from 'styled-icons/fluentui-system-filled';
import { DocumentOnePage } from 'styled-icons/fluentui-system-filled';
import { Blog} from 'styled-icons/icomoon';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='sect_links'>
                    <div className='sect_link'>
                        <Link className='link' to='/'>
                            <div>
                                <Home className='icon'/>
                                <h1>Home</h1>
                            </div>
                        </Link>
                    </div>

                    <div className='sect_link'>
                        <Link className='link' to='/about'>
                            <div>
                                <Person className='icon'/>
                                <h1>About</h1>
                            </div>
                        </Link>
                    </div>

                    <div className='sect_link'>
                        <Link className='link' to='/projects'>
                            <div>
                                <ClipboardCode className='icon'/>
                                <h1>Projects</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='sect_link'>
                        <Link className='link' to='/resume'>
                            <div>
                                <DocumentOnePage className='icon'/>
                                <h1>Resume</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='sect_link'> 
                        <Link className='link' to='/blog'>
                            <div>
                                <Blog className='icon'/>
                                <h1>Blog</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;