import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../sass'
import { staggerContainer, textVariant, slideIn } from '../utils'
import { cover, stamp } from '../assets'

const Hero = () => {
  return (
    <div className={`${styles.paddingY} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className={`${styles.flexCenter} flex-col relative z-10`}>
          <motion.h1
            variants={textVariant(1.1)}
            className={styles.heroHeading}
          >
            METAVERSE
          </motion.h1>

          <motion.div
            variants={textVariant(1.2)}
            className={styles.flexCenter}
          >
            <h1 className={styles.heroHeading}>MA</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>NESS</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='relative md:-mt-5 -mt-3'
        >
          <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] -top-[30px] z-0' />

          <img 
            src={cover}
            alt='cover'
            className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] relative z-10'
          />

          <div className='flex justify-end sm:-mt-[70px] -mt-[50px] pr-10 relative z-10'>
            <a href='#explore'>
              <img 
                src={stamp}
                alt='stamp'
                className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero