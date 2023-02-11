import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import iconTriangle from '../../assets/noun-triangle-3105557.svg';

const LayoutNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const sideBarVariants = {
  //   open: {
  //     x: 0,
  //     transition: {
  //       type: 'spring',
  //       stiffness: 20,
  //       damping: 30,
  //     },
  //   },
  //   closed: {
  //     x: '-100%',
  //     transition: {
  //       type: 'spring',
  //       stiffness: 20,
  //       damping: 30,
  //     },
  //   },
  // };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 20,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
  };

  const toggleVariants = {
    open: {
      rotate: 90,
    },
    closed: {
      rotate: 0,
    },
  };

  return (
    <>
      <div
        className="flex justify-between items-center px-4 pt-7 pb-6"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div className='flex flex-row justify-between'>
          <motion.svg
            whileHover={{ rotate: 180 }}
            fill="#c0f"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="60 70 600 600"
            className="ml-5 w-12 h-12 md:w-8 md:h-8 mr-4"
          >
            <g>
              <motion.path
                d="M616,580.2H84l266-460.3L616,580.2z M210,507.4h280L350,265.4L210,507.4z"
                animate={{ rotate: 360 }}
              />
            </g>
          </motion.svg>
          <h2 className="md:text-2xl text-4xl font-bold text-white drop-shadow-lg">
            Portfolio
          </h2>
        </div>
        <button
          className="focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            className="text-white text-4xl pr-4 leading-5"
            variants={toggleVariants}
            animate={isOpen ? "open" : "closed"}
          >
            &#9776;
          </motion.span>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* <motion.nav
              className="fixed z-50 bg-black text-white md:w-64 w-screen py-4"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <p className="px-4 py-2 w-screen">Home</p>
            </motion.nav> */}
            <motion.div
              className="flex justify-evenly pb-4 items-center w-full shadow-lg"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              variants={sidebarVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              exit="closed"
            >
              <motion.button
                className="text-white md:text-sm text-lg md:px-1 px-10 py-1 font-bold hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.4, 1.3] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              >
                Home
              </motion.button>
              <motion.button
                className="text-white md:text-sm text-lg md:px-1 px-10 py-1 font-bold hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.4, 1.3] }}
                transition={{ duration: 0.3 }}
              >
                About
              </motion.button>
              <motion.button
                className="text-white md:text-sm text-lg md:px-1 px-10 py-1 font-bold hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.4, 1.3] }}
                transition={{ duration: 0.3 }}
              >
                Projects
              </motion.button>
              <motion.button
                className="text-white md:text-sm text-lg md:px-1 px-10 py-1 font-bold hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.4, 1.3] }}
                transition={{ duration: 0.3 }}
              >
                Contact
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LayoutNav;

// return (
//     <>
//       <div className="fixed z-50 top-0 left-0 right-0 px-4 py-2 bg-gray-800">
//         <motion.div
//           className="flex justify-between items-center w-full"
//           variants={sidebarVariants}
//           initial="closed"
//           animate={isOpen ? "open" : "closed"}
//           exit="closed"
//         >
//           <p className="text-white px-4">Home</p>
//           <p className="text-white px-4">About</p>
//           <p className="text-white px-4">Projects</p>
//           <p className="text-white px-4">Contact</p>
//         </motion.div>
//         <button
//           className="focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <motion.span
//             className="text-white"
//             variants={toggleVariants}
//             animate={isOpen ? "open" : "closed"}
//           >
//             &#9776;
//           </motion.span>
//         </button>
//       </div>
//     </>
//   );
// };


            // <p className="px-4 py-2">About</p>
            // <p className="px-4 py-2">Projects</p>
            // <p className="px-4 py-2">Contact</p>