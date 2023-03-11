import React from 'react'
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../utils'

const TypingText = ({ title }) => {
  return (
    <motion.p
      variants={textContainer}
      className='font-normal text-[14px] leading-[17.64px] text-secondary-white'
    >
      {Array.from(title).map((text, index) => (
        <motion.span
          variants={textVariant2}
          key={index}
        >
          {text === ' ' ? '\u00A0' : text}
        </motion.span>
      ))}
    </motion.p>
  )
}

export default TypingText