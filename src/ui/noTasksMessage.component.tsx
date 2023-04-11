import { useAtomValue } from 'jotai';
import { tasksAtom } from '../tasksStore';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hide: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

const NoTasksMessage = () => {
  const tasksList = useAtomValue(tasksAtom);
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial='hide'
          animate={!tasksList.length ? 'show' : 'hide'}
          exit='hide'
          variants={variants}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className='h-full text-center lg:text-xl my-4 py-4 px-2 rounded-md border border-dashed border-zinc-600 sm:text-base'
        >
          There is no tasks at this moment... Try add some!
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default NoTasksMessage;
