import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../sass'
import { navVariants } from '../utils'
import { search, menu } from '../assets'

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.paddingX} py-8 relative`}
    >
      <div className='absolute w-1/2 inset-0 gradient-01' />

      <div className={`${styles.innerWidth} mx-auto flex justify-between`}>
        <img 
          src={search}
          alt='search'
          className='w-6 h-6 object-contain'
        />

        <h2 className='font-extrabold text-[24px] leading-[30.24px] text-white uppercase'>
          METAVERSUS
        </h2>

        <img 
          src={menu}
          alt='menu'
          className='w-6 h-6 object-contain'
        />
      </div>
    </motion.div>
  )
}

export default Navbar