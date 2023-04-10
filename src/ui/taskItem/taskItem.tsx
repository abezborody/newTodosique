import React from 'react';
import { ITask } from '../../tasksStore';
import { useAtom } from 'jotai';
import { motion, AnimatePresence } from 'framer-motion';

import {
  toggleTaskAtom,
  updateTaskAtom,
  removeTaskAtom,
} from '../../tasksStore';

import Button from '../button/button.component';

interface ITaskProps {
  taskData: ITask;
}

const TaskItem: React.FC<ITaskProps> = ({ taskData }: ITaskProps) => {
  const { id, title, completed } = taskData;
  const [, toggleTask] = useAtom(toggleTaskAtom);
  const [, updateTask] = useAtom(updateTaskAtom);
  const [, removeTask] = useAtom(removeTaskAtom);

  return (
    <AnimatePresence>
      <motion.li
        className='flex gap-2'
        initial='hidden'
        animate='revealed'
        exit='deleted'
        whileHover='hovered'
        variants={{
          hidden: {
            opacity: 0,
            y: 16,
          },
          revealed: {
            opacity: 1,
            y: 0,
          },
          deleted: {
            opacity: 0,
            scale: 0.5,
          },
          hovered: {
            scale: 1.02,
          },
        }}
        transition={{
          type: 'spring',
          stiffness: 330,
          damping: 35,
        }}
      >
        <input
          className='flex-1 border rounded border-zinc-800 hover:border-zinc-500 bg-zinc-800 text-zinc-50  px-2 w-full'
          value={title}
          onChange={(e) => updateTask({ id: id, title: e.target.value })}
        />
        <Button handler={() => toggleTask(id)}>
          {completed ? 'undone' : 'done'}
        </Button>
        <Button handler={() => removeTask(id)}>delete</Button>
      </motion.li>
    </AnimatePresence>
  );
};

export default TaskItem;

// Task example
// {
//   "userId": 1,
//   "id": 2,
//   "title": "quis ut nam facilis et officia qui",
//   "completed": false
// },
