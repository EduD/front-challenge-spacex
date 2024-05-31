//To animate each card
import { motion } from 'framer-motion';

import { ResultCharacters } from '../types';

interface Props extends ResultCharacters {
  onSelected: (id: string) => void;
  index: number;
}

export const CardCharacter = (props: Props) => {
  const { id, image, name, onSelected, index } = props; 

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }} // Element inicialization
      animate={{ opacity: 1, y: 0 }}  // properties final animation
      transition={{ delay: 0.1 * index }} // Delay animation
      className='bg-black rounded-md flex flex-col sm:w-auto mx-auto overflow-hidden'
    >

      <motion.div
        className='overflow-hidden cursor-pointer'
        onClick={() => onSelected(id)} // ID received by props
      >
        <motion.img
          src={image}
          alt={name}
          className='align-top hover:scale-105 transition-all hover:grayscale-0 grayscale'
        />
      </motion.div>

      <motion.p className='break-words p-2 font-semibold flex-1 grid place-items-center'>
        {name}
      </motion.p>
    </motion.div>
  );
};
