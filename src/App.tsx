import ControlsBtns from './ui/controlsBtns.component';
import TasksList from './ui/tasksList.component';
import AddTask from './ui/addTask.component';
import { motion, motionValue, animate, AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import { addTaskIsOpen } from './tasksStore';
import { useEffect } from 'react';

const App: React.FunctionComponent = () => {
  // const [isOpen] = useAtom(addTaskIsOpen);

  return (
    <div className='h-full container flex flex-col gap-1 items-center mx-auto px-2'>
      <h1 className='text-xl font-bold pt-4 pb-2'>todosique 2.0</h1>
      <ControlsBtns />
      <motion.div className='w-full'>
        <AddTask />
      </motion.div>
      <TasksList />
    </div>
  );
};

export default App;
