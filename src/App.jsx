/* eslint-disable no-unused-vars */
import { motion, easeInOut } from 'framer-motion'

function App() {

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-black bg-repeat text-white'
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px,rgb(8, 111, 184) 0.5px, transparent 1px)`,
        backgroundSize: '8px 8px',
        backgroundRepeat: 'repeat',
      }} 
    >
      <div
              className="[perspective::1000px] [transform-style:preserve-3d] w-full h-full flex items-center justify-center"
          >
              <motion.button
                  initial={{
                      opacity: 0,
                      filter: 'blur(10px)',
                  }}
                  animate={{
                      opacity: 1,
                      filter: 'blur(0px)'
                  }}
                  exit={{
                      opacity: 0,
                      filter: 'blur(10px)'
                  }}
                  whileHover={{
                      rotateX: 20,
                      rotateY: 20,
                      boxShadow: '0px 20px 50px rgba(8, 112, 184, 0.7)',
                      y: -5,
                  }}
                  whileTap={{
                      y: 0
                  }}
                  style={{
                      translateZ: 100
                  }}
                  transition={{
                      duration: 0.3,
                      ease: easeInOut
                  }}
                  className="
                  px-12 py-4
                  rounded-lg
                  bg-black
                  shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),_inset_0_-1px_0_0_rgba(0,0,0,0.5),_0_10px_20px_-5px_rgba(0,0,0,0.3)]
                  relative
                  group
                  cursor-pointer
              ">
                  <span className='group-hover:text-cyan-500 transition-colors duration-300'>Hover Over Me</span>
                  <span className="
                      absolute inset-x-0 
                      bottom-px 
                      bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
                      h-px
                      w-3/4
                      mx-auto

                  "></span>
                  <span className="
                      absolute inset-x-0 
                      bottom-px 
                      bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
                      h-[4px]
                      mx-auto
                      blur-sm
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                  "></span>
              </motion.button>
      </div>
    </div>
  )
}

export default App
