import { useAtom } from 'jotai';
import { addTaskAtom, newTaskAtom } from '../tasksStore';

const AddTask = () => {
  const [newTask, setNewTask] = useAtom(newTaskAtom);
  const [, addTask] = useAtom(addTaskAtom);
  return (
    <form
      className='new-task__container'
      onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}
    >
      <input
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className='new-task__input'
        type='text'
        placeholder='Title of task'
      />
      <button>+</button>
    </form>
  );
};

export default AddTask;
