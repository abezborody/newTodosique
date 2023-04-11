import Button from './button/button.component';
import { ITask } from '../tasksStore';
import { useAtom } from 'jotai';
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
    setIsOpen(false);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => data.slice(0, 5))
      .then((tasks: ITask[]) => setTasks(tasks));
  };
  const clearTasksHandler = () => {
    setIsOpen(false);
    setTasks([]);
  };
  return (
    <div className='flex gap-1 z-10'>
      <Button buttonHoverType='success' handler={addTaskHandler}>
        add task
      </Button>
      <Button buttonHoverType='alert' handler={clearTasksHandler}>
        clear tasks
      </Button>
      <Button handler={loadTemplateHandler}>load template</Button>
    </div>
  );
};

export default ControlsBtns;
