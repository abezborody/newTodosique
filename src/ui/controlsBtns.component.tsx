import { useAtom } from 'jotai';
import { tasksAtom, ITask } from '../tasksStore';

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
      <button onClick={addTaskHandler}>add task</button>
      <button onClick={loadTemplateHandler}>load template</button>
      <button onClick={clearTasksHandler}>clear tasks</button>
    </div>
  );
};

export default ControlsBtns;
