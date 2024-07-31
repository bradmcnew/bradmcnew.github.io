import { useEffect, useRef } from 'react'
import './index.scss'
import anime from 'animejs'
import logoImage from '../../../assets/images/logo-s.png'

const Logo = () => {
  const logoRef = useRef(null)
  useEffect(() => {
    const anim = anime.timeline({
      loop: false,
    })

    anim
      .add({
        targets: '#hexagon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 2000,
        delay: anime.stagger(250, { start: 1000 }),
      })
      .add({
        targets: '#logo-image',
        duration: 1000,
        opacity: 1,
        easing: 'easeInOutQuart',
      })

    // Clean up animation when component unmounts
    return () => {
      anim.pause()
    }
  }, [])

  return (
    <div className="logo-container" ref={logoRef}>
      <svg
        id="hexagon"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <image
            id="logo-image"
            x="20"
            y="20"
            width="60"
            height="60"
            xlinkHref={logoImage}
            opacity="0"
          />
          <path
            stroke="#ffd700"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
