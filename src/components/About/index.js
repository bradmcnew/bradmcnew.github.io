import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import blockM from '../../assets/images/block-m.png';

const About = () => {

    const [ letterClass, setLetterClass ] = useState( 'text-animate' );
    useEffect( () => {
        const timeoutId = setTimeout( () => {
            setLetterClass( 'text-animate-hover' );
        }, 3000 )
        return () => clearTimeout( timeoutId );
    }, [] )

    return (
        <div>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={ letterClass }
                            strArray={ [ 'A', 'b', 'o', 'u', 't', ' ', 'M', 'e' ] }
                            idx={ 15 }
                        />
                    </h1>
                    <p>
                        From an early age, I have been captivated by technology and its ability to transform the world. My enthusiasm drove me to pursue a degree in Computer Science at the <b>University of Michigan</b>, where I built a solid foundation in programming languages, algorithms, and full-stack development. Throughout my academic journey, I have continually pushed myself to think critically and tackle complex problems, sharpening my analytical and problem-solving abilities.
                    </p>
                    <p align="LEFT">
                        Beyond my technical expertise, I have strong interpersonal skills and an unwavering commitment to continuous learning. I am always eager to broaden my knowledge and stay up-to-date with the latest advancements in the tech industry.
                    </p>
                    <p>
                        I am confident that my dedication, adaptability, and strong work ethic will enable me to excel in fast-paced and dynamic environments.
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <img className="block-m" src={ blockM } alt="block-m" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={ faHtml5 } color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={ faCss3 } color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={ faReact } color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={ faJsSquare } color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={ faGitAlt } color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
};

export default About;
