import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import { tasksAtom } from '../tasksStore';

import TaskItem from './taskItem/taskItem';
import { ITask } from '../tasksStore';
import React from 'react';
import NoTasksMessage from './noTasksMessage.component';

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
