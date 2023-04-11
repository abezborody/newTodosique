import ControlsBtns from './ui/controlsBtns.component';
import TasksList from './ui/tasksList.component';
import AddTask from './ui/addTask.component';
import { motion, motionValue, animate, AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import { addTaskIsOpen } from './tasksStore';
import { useEffect } from 'react';

const App: React.FunctionComponent = () => {
  const [isOpen] = useAtom(addTaskIsOpen);
  const states = {
    shiftUp: {
      y: -48,
    },
    shiftDown: {
      y: 0,
    },
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <div className='h-full container flex flex-col gap-1 items-center mx-auto px-2'>
      <h1 className='text-xl font-bold pt-4 pb-2'>todosique 2.0</h1>
      <ControlsBtns />
      <motion.div
        initial={states.shiftUp}
        animate={isOpen ? states.shiftDown : states.shiftUp}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className='w-full'
      >
        <motion.div
          initial={states.hide}
          animate={isOpen ? states.show : states.hide}
          transition={{ duration: 0.1 }}
        >
          <AddTask />
        </motion.div>
        <TasksList />
      </motion.div>
    </div>
  );
};

export default App;
