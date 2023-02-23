import { useRef } from 'react';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
// import iconTriangle from '../../assets/noun-triangle-3105557.svg';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const LayoutNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  // const sidebarVariants = {
  //   open: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 150,
  //       damping: 20,
  //       // delay: 0.2,
  //     },
  //   },
  //   closed: {
  //     y: "-100%",
  //     opacity: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 200,
  //       damping: 20,
  //     },
  //   },
  // };

  // const toggleVariants = {
  //   open: {
  //     rotate: 180,
  //   },
  //   closed: {
  //     rotate: 0,
  //   },
  // };

  // const toggleVariants = {
  //   open: { rotate: 45 },
  //   closed: { rotate: 0 },
  // };

  // const crossVariants = {
  //   open: { opacity: 1 },
  //   closed: { opacity: 0 },
  // };

  return (
    <>
      <div
        className="flex justify-between items-center px-4 pt-7 pb-6 z-50"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div className="flex flex-row justify-between">
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
          className="focus:outline-none pr-3 pt-1"
          onClick={() => toggleOpen()}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 2 2.5 L 20 2.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
            />
            <motion.path
              d="M 2 9.423 L 20 9.423"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
            />
            <motion.path
              d="M 2 16.346 L 20 16.346"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
            />
          </motion.svg>
        </button>

        {/* <MenuToggle toggle={() => toggleOpen()} /> */}
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="-z-10 float-right rounded-b-lg p-4 px-6"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              variants={{
                open: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: 0.1,
                  },
                },
                closed: {
                  x: "100%",
                  opacity: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  },
                },
              }}
              transition={{ duration: 0.3 }}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              ref={containerRef}
              exit="closed"
            >
              <motion.nav
                className="flex justify-evenly pb-4 items-center w-full"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.1,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <motion.button
                  className="text-white md:text-sm text-lg md:px-3 px-10 font-bold hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.4, 1.3] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  Home
                </motion.button>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-4 items-center w-full pt-3"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.15,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <motion.button
                  className="text-white md:text-sm text-lg md:px-3 px-10 font-bold hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.4, 1.3] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  About
                </motion.button>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-4 items-center w-full pt-3"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.2,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <motion.button
                  className="text-white md:text-sm text-lg md:px-3 px-10 font-bold hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.4, 1.3] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  Projects
                </motion.button>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-4 items-center w-full pt-3"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.25,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <motion.button
                  className="text-white md:text-sm text-lg md:px-3 px-10 font-bold hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.4, 1.3] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  Contact
                </motion.button>
              </motion.nav>
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