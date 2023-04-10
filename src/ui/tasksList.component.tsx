import { useAtom } from 'jotai';
import {
  tasksAtom,
  toggleTaskAtom,
  updateTaskAtom,
  removeTaskAtom,
} from '../tasksStore';

import TaskItem from './taskItem/taskItem';
import { ITask } from '../tasksStore';
import React from 'react';
import NoTasksMessage from './noTasksMessage.component';

interface ITaskListProps {
  tasks: ITask[];
}

const TasksList: React.FunctionComponent = () => {
  const [tasks] = useAtom(tasksAtom);
  return (
    <div className=' w-full'>
      {tasks.length ? <h2 className='my-2 text-lg font-bold'>Tasks:</h2> : ''}
      <ul className='flex flex-col gap-1'>
        {tasks.length ? (
          tasks.map((task: ITask) => <TaskItem key={task.id} taskData={task} />)
        ) : (
          <NoTasksMessage />
        )}
      </ul>
    </div>
  );
};

export default TasksList;
