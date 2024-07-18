import { useEffect, useRef } from 'react'
import './index.scss'
import anime from 'animejs'

const Logo = () => {
  const logoRef = useRef(null)
  useEffect(() => {
    const anim = anime.timeline({
      loop: true,
      direction: 'alternate',
    })

    anim
      .add({
        targets: '#hexagon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 2000,
        delay: function (el, i) {
          return i * 250
        },
      })
      .add({
        targets: '#hexagon #B',
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
        xmlnsXlink="http://www.w3.org/1999/xlink" // Corrected xlink attribute
      >
        <g>
          <g
            id="B"
            transform="translate(36, 33)"
            fill="#ffd700"
            style={{ opacity: 0 }}
          >
            <text
              x="0.141666985"
              y="33"
              fontFamily="system-ui, Calibre-Medium, Calibre, sans-serif"
              fontSize="50"
              fontWeight="400"
              letterSpacing="4.16666603"
            >
              B
            </text>
          </g>
          <path
            stroke="#ffd700"
            strokeWidth="5" // Corrected stroke-width attribute
            strokeLinecap="round" // Corrected stroke-linecap attribute
            strokeLinejoin="round" // Corrected stroke-linejoin attribute
            d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
