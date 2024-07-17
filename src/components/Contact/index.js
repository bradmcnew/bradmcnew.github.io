import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [ letterClass, setLetterClass ] = useState( 'text-animate' );
    const refForm = useRef();

    useEffect( () => {
        const timeoutId = setTimeout( () => {
            setLetterClass( 'text-animate-hover' );
        }, 3000 )
        return () => clearTimeout( timeoutId );
    }, [] )

    const sendEmail = ( e ) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_yer7tqk',
                'template_8ytpo09',
                refForm.current,
                'JqczwtBa-hgwT1nTp'
            )
            .then(
                () => {
                    alert( 'Message successfully sent!' );
                    window.location.reload( false );
                },
                () => {
                    alert( 'Failed to send the message. Please try again' );
                }
            );
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={ letterClass }
                            strArray={ [ 'C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e' ] }
                            idx={ 15 }
                        />
                    </h1>
                    <p>I am interested in freelance opportunities - especially ambitious or large projects. However, if you have another request or question, don't hesitate to contact me using the form below</p>
                    <div className='contact-form'>
                        <form ref={ refForm } onSubmit={ sendEmail }>
                            <ul>
                                <li className='half'>
                                    <input type='text' name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <button type='submit' className='flat-button' value='SEND'>Send</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Brad McNew,
                    <br />
                    330 Dartmouth St,
                    <br />
                    Boston, MA<br />
                    <span>mcnewbrad@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={ [ 42.353320, -71.079210 ] } zoom={ 13 }>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={ [ 42.353320, -71.079210 ] }>
                            <Popup>I live here :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;
