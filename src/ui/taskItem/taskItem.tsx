import React from 'react';
import { ITask } from '../../tasksStore';
import { useAtom } from 'jotai';
import {
  toggleTaskAtom,
  updateTaskAtom,
  removeTaskAtom,
} from '../../tasksStore';

import './taskItem.css';

interface ITaskProps {
  taskData: ITask;
}

const TaskItem: React.FC<ITaskProps> = ({ taskData }: ITaskProps) => {
  const { id, title, completed } = taskData;
  const [, toggleTask] = useAtom(toggleTaskAtom);
  const [, updateTask] = useAtom(updateTaskAtom);
  const [, removeTask] = useAtom(removeTaskAtom);

  return (
    <li className='task__container'>
      <input
        value={title}
        onChange={(e) => updateTask({ id: id, title: e.target.value })}
      />
      <button className='task-button__check' onClick={() => toggleTask(id)}>
        {completed ? 'undone' : 'done'}
      </button>
      <button className='task-button__delete' onClick={() => removeTask(id)}>
        delete
      </button>
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
