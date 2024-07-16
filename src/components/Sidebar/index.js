import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo'>
            <img src={ LogoS } alt="logo" />
            <img className="sub-logo" src={ LogoSubtitle } alt="sublogo" />
        </Link>
        <nav>
            <NavLink exact="true" activclassname="active" to="/">
                <FontAwesomeIcon icon={ faHome } color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={ faUser } color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={ faSuitcase } color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={ faEnvelope } color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/bradmcnew/'
                >
                    <FontAwesomeIcon icon={ faLinkedin } color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/bradmcnew'
                >
                    <FontAwesomeIcon icon={ faGithub } color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;
