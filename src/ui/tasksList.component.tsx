import { useAtom } from 'jotai';
import { motion, stagger } from 'framer-motion';
import { tasksAtom } from '../tasksStore';

import TaskItem from './taskItem/taskItem';
import { ITask } from '../tasksStore';
import React, { useEffect } from 'react';
import NoTasksMessage from './noTasksMessage.component';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'li',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

const TasksList: React.FunctionComponent = () => {
  const [tasks] = useAtom(tasksAtom);
  return (
    <div className='w-full h-full'>
      {tasks.length ? (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='my-2 text-lg font-bold'
        >
          Tasks:
        </motion.h2>
      ) : (
        ''
      )}
      <motion.ul className='flex flex-col gap-1'>
        {tasks.length ? (
          tasks.map((task: ITask) => <TaskItem key={task.id} taskData={task} />)
        ) : (
          <NoTasksMessage />
        )}
      </motion.ul>
    </div>
  );
};

export default TasksList;
