import React from 'react';
import { ITask } from '../../tasksStore';
import { useAtom } from 'jotai';
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
    <li className='flex gap-2 hover:-translate-y-0.5 transition'>
      <input
        className='flex-1 border rounded border-zinc-800 hover:border-zinc-500 bg-zinc-800 text-zinc-50  px-2 w-full'
        value={title}
        onChange={(e) => updateTask({ id: id, title: e.target.value })}
      />
      <Button handler={() => toggleTask(id)}>
        {completed ? 'undone' : 'done'}
      </Button>
      <Button handler={() => removeTask(id)}>delete</Button>
    </li>
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
