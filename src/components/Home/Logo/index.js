import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import LogoS from '../../../assets/images/logo-s.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.timeline().to(bgRef.current, {
      duration: 4,
      opacity: 1,
    });

    gsap.timeline().to(solidLogoRef.current, {
      opacity: 1,
      delay: 4,
      duration: 4,
    });
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />
    </div>
  );
};

export default Logo;