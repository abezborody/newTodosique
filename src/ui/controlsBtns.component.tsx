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
    <div className='buttons-container'>
      <Button onClick={addTaskHandler}>add task</Button>
      <Button onClick={loadTemplateHandler}>load template</Button>
      <Button onClick={clearTasksHandler}>clear tasks</Button>
    </div>
  );
};

export default ControlsBtns;
