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
    <div>
      <h2>Tasks:</h2>
      <ul className='tasks-list__container'>
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
