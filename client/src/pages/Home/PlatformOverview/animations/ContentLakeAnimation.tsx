import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const whileInViewAnimation = {
  animationDelay: '0.5s',
  transform: 'translateY(0)',
  transitionDuration: '1s'
}

const initialAnimation = {
  transform: 'translateY(-60%)'
}

const whileHover = {
  fill: '#f2f2f2'
}

export default function ContentLakeAnimation({ isHovering }: { isHovering: boolean }) {
  return (
    <StyledSvg
      viewport={{ once: true }}
      whileInView={whileInViewAnimation}
      initial={initialAnimation}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 142.18"
    >
      <motion.path
        fill="#6E7683"
        whileHover={whileHover}
        fillRule="evenodd"
        d="M0 0v9c.04 3.37 2.29 6.73 6.74 9.29l96.99 55.99c8.99 5.19 23.56 5.19 32.54 0l96.99-55.99c4.45-2.57 6.7-5.93 6.74-9.29V0c0 3.36-2.29 6.73-6.74 9.29l-96.99 55.99c-8.99 5.19-23.56 5.19-32.54 0L6.74 9.29C2.29 6.73 0 3.37 0 0z"
      ></motion.path>
      <motion.path
        fill="#565D67"
        whileHover={whileHover}
        fillRule="evenodd"
        d="M0 16v9c.04 3.37 2.29 6.73 6.74 9.29l96.99 55.99c8.99 5.19 23.56 5.19 32.54 0l96.99-55.99c4.45-2.57 6.7-5.93 6.74-9.29v-9c0 3.36-2.29 6.73-6.74 9.29l-96.99 55.99c-8.99 5.19-23.56 5.19-32.54 0L6.74 25.29C2.29 22.73 0 19.37 0 16z"
      ></motion.path>
      <motion.path
        whileHover={whileHover}
        fill="#3F434A"
        fillRule="evenodd"
        d="M0 32v9c.04 3.37 2.29 6.73 6.74 9.29l96.99 55.99c8.99 5.19 23.56 5.19 32.54 0l96.99-55.99c4.45-2.57 6.7-5.93 6.74-9.29v-9c0 3.36-2.29 6.73-6.74 9.29l-96.99 55.99c-8.99 5.19-23.56 5.19-32.54 0L6.74 41.29C2.29 38.73 0 35.37 0 32z"
      ></motion.path>
      <motion.path
        whileHover={whileHover}
        fill="#272A2E"
        fillRule="evenodd"
        d="M0 48v9c.04 3.37 2.29 6.73 6.74 9.29l96.99 55.99c8.99 5.19 23.56 5.19 32.54 0l96.99-55.99c4.45-2.57 6.7-5.93 6.74-9.29v-9c0 3.36-2.29 6.73-6.74 9.29l-96.99 55.99c-8.99 5.19-23.56 5.19-32.54 0L6.74 57.29C2.29 54.73 0 51.37 0 48z"
      ></motion.path>
      <motion.path
        whileHover={whileHover}
        fill="#1B1D20"
        fillRule="evenodd"
        d="M0 64v9c.04 3.37 2.29 6.73 6.74 9.29l96.99 55.99c8.99 5.19 23.56 5.19 32.54 0l96.99-55.99c4.45-2.57 6.7-5.93 6.74-9.29v-9c0 3.36-2.29 6.73-6.74 9.29l-96.99 55.99c-8.99 5.19-23.56 5.19-32.54 0L6.74 73.29C2.29 70.73 0 67.37 0 64z"
      ></motion.path>
    </StyledSvg>
  )
}

const StyledSvg = styled(motion.svg)`
  cursor: pointer;
`
