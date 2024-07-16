import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [ letterClass, setLetterClass ] = useState( 'text-animate' );
    const nameArray = [ 'r', 'a', 'd', ' ', 'M', 'c', 'N', 'e', 'w' ];
    const jobArray = [ 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.' ];

    useEffect( () => {
        const timeoutId = setTimeout( () => {
            setLetterClass( 'text-animate-hover' );
        }, 5000 )
        return () => clearTimeout( timeoutId );
    }, [] )

    return (
        <div>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={ letterClass }>H</span>
                        <span className={ `${letterClass} _12` }>i,</span>
                        <br />
                        <span className={ `${letterClass} _13` }>I</span>
                        <span className={ `${letterClass} _14` }>'m</span>
                        <img src={ LogoTitle } alt="developer" />
                        <AnimatedLetters letterClass={ letterClass } strArray={ nameArray } idx={ 15 } />
                        <br />
                        <AnimatedLetters letterClass={ letterClass } strArray={ jobArray } idx={ 24 } />
                    </h1>
                    <h2>Frontend Developer / JavaScript Expert / YouTuber</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default Home;
