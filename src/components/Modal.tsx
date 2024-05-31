//This component receive 3 props:
// onClearSelected
//children
// isOpen

import { motion, Variants } from "framer-motion";

interface Props {
  onClearSelected: () => void; //function to hide the modal and remove the selected character.
  children: JSX.Element | JSX.Element[]; //the elements that will be shown inside the modal.
  isOpen: boolean; //boolean value to know if the modal is open or not.
}

const variants: Variants = {
  opened: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    transition: { duration: 0.5 },
  },
  closed: {
    width: "0vw",
    height: "0vh",
    borderRadius: "20px",
    transition: { duration: 0.5 },
  },
};

const variantsContent: Variants = {
  opened: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.3 },
  },
  closed: {
    opacity: 0,
    display: "none",
    y: 200,
    transition: { delay: 0 },
  },
};

export const ModalCharacter = ({
  children,
  isOpen,
  onClearSelected,
}: Props) => {
  return (
    
    
      <motion.div
        // className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-lg text-white select-none'
        className=" backdrop-blur-lg text-white select-none"
        variants={variants}
        animate={isOpen ? "opened" : "closed"}
      >
        <motion.div
          variants={variantsContent}
          animate={isOpen ? "opened" : "closed"}
        >
          {children}
        </motion.div>
        {isOpen && (
          <button
            onClick={onClearSelected}
            className="bg-red-500 text-white rounded-md fixed sm:top-8 top-2 sm:right-10 right-4 py-1 px-2 font-semibold"
          >
            close
          </button>
        )}
      </motion.div>
  );
};
