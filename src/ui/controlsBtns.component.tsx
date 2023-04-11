import Button from './button/button.component';
import { ITask } from '../tasksStore';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { addTaskIsOpen, tasksAtom } from '../tasksStore';

const ControlsBtns = () => {
  const [, setTasks] = useAtom(tasksAtom);
  const [isOpen, setIsOpen] = useAtom(addTaskIsOpen);

  const addTaskHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
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
    <div className='flex gap-1 z-10'>
      <Button handler={addTaskHandler}>add task</Button>
      <Button handler={loadTemplateHandler}>load template</Button>
      <Button handler={clearTasksHandler}>clear tasks</Button>
    </div>
  );
};

export default ControlsBtns;