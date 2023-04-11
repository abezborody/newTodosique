import { useAtom, useSetAtom } from 'jotai';
import { addTaskAtom, newTaskAtom, addTaskIsOpen } from '../tasksStore';

import Button from './button/button.component';

const AddTask = () => {
  const [newTask, setNewTask] = useAtom(newTaskAtom);
  const [, addTask] = useAtom(addTaskAtom);
  return (
    <form
      className='flex gap-2 rounded-md w-full my-3'
      onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}
    >
      <input
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className='rounded px-2 w-full bg-zinc-800 border border-zinc-800 hover:border-zinc-600 transition'
        type='text'
        placeholder='Title of task'
      />
      <Button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 96 960 960'
          width='24'
          className='fill-zinc-50'
        >
          <path d='M440 856V616H200v-80h240V296h80v240h240v80H520v240h-80Z' />
        </svg>
      </Button>
    </form>
  );
};

export default AddTask;
