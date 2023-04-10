import { useAtom } from 'jotai';
import { tasksAtom, ITask } from '../tasksStore';

import Button from './button/button.component';

const ControlsBtns = () => {
  const [, setTasks] = useAtom(tasksAtom);
  const addTaskHandler = () => {};
  const loadTemplateHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => data.slice(0, 5))
      .then((tasks: ITask[]) => setTasks(tasks));
  };
  const clearTasksHandler = () => {
    setTasks([]);
  };
  return (
    <div className='flex gap-1'>
      <Button handler={addTaskHandler}>add task</Button>
      <Button handler={loadTemplateHandler}>load template</Button>
      <Button handler={clearTasksHandler}>clear tasks</Button>
    </div>
  );
};

export default ControlsBtns;
