import styled from 'styled-components'
import { motion, useAnimationControls } from 'framer-motion'

const whileInViewAnimation = {
  animationDelay: '0.5s',
  transform: 'translateY(0)',
  transitionDuration: '1s'
}

const initialAnimation = {
  transform: 'translateY(110%)'
}

const bgAnimation = {
  hover: {
    fill: '#fff'
  }
}

const sectionAnimation = {
  hover: {
    fill: '#f2f2f2'
  }
}

export default function StudioAnimation({ isHovering }: { isHovering: boolean }) {
  return (
    <StyledSvg
      viewport={{ once: true }}
      whileInView={whileInViewAnimation}
      whileHover="hover"
      initial={initialAnimation}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 138.55"
    >
      <g>
        <motion.path
          variants={bgAnimation}
          fill="#272e29"
          d="M0 69.28L120 0l120 69.28-120 69.28L0 69.28z"
        ></motion.path>
        <path fill="#201b1b" d="M0 69.28L120 0l7.69 4.44-120 69.28L0 69.28z"></path>
        <motion.path
          variants={sectionAnimation}
          fill="#3F434A"
          d="M23.08 73.72l30.77-17.76 96.92 55.95L120 129.67 23.08 73.72z"
        ></motion.path>
        <path
          fill="#565D67"
          d="M23.08 73.72l30.77-17.76 3.08 1.78L26.16 75.5l-3.08-1.78zM30.77 78.16L61.54 60.4l3.08 1.78-30.77 17.76-3.08-1.78zM38.46 82.6l30.77-17.76 3.08 1.78-30.77 17.76-3.08-1.78zM46.15 87.04l30.77-17.76L80 71.06 49.23 88.82l-3.08-1.78zM53.85 91.48l30.77-17.76 3.08 1.78-30.77 17.76-3.08-1.78zM61.54 95.92l30.77-17.76 3.08 1.78L64.62 97.7l-3.08-1.78zM69.23 100.36l16.92-9.77 3.08 1.78-16.92 9.77-3.08-1.78z"
          data-name="element"
        ></path>
        <motion.path
          variants={sectionAnimation}
          fill="#3F434A"
          d="M61.54 51.51l66.15-38.19 96.92 55.95-66.15 38.19-96.92-55.95z"
        ></motion.path>
        <path
          fill="#565D67"
          d="M61.54 51.51l66.15-38.19 3.08 1.78-66.15 38.19-3.08-1.78zM69.23 55.95l50.38-29.09 3.08 1.78-50.38 29.09-3.08-1.78zM122.31 25.31l13.08-7.55 3.08 1.78-13.08 7.55-3.08-1.78zM76.92 60.39l66.16-38.19 3.08 1.78L80 62.17l-3.08-1.78zM84.62 64.84l41.54-23.98 3.08 1.78L87.7 66.62l-3.08-1.78zM123.08 87.04l66.15-38.19 3.08 1.78-66.15 38.19-3.08-1.78zM130.77 91.48l57.31-33.08 3.08 1.78-57.31 33.08-3.08-1.78zM138.46 95.92l66.15-38.19 3.08 1.78-66.15 38.19-3.08-1.78z"
          data-name="element"
        ></path>
        <path fill="#F36458" d="M0 69.28l7.69-4.44 7.69 4.44-7.69 4.44L0 69.28z"></path>
        <path
          fill="#565D67"
          d="M92.31 69.28l66.15-38.19 26.15 15.1-66.15 38.19-26.15-15.1z"
          data-name="element"
        ></path>
      </g>
    </StyledSvg>
  )
}

const StyledSvg = styled(motion.svg)`
  cursor: pointer;
`
