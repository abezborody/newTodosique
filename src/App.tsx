import ControlsBtns from './ui/controlsBtns.component';
import TasksList from './ui/tasksList.component';
import AddTask from './ui/addTask.component';

const App: React.FunctionComponent = () => {
  return (
    <div className='h-full container flex flex-col gap-2 items-center mx-auto '>
      <h1 className='text-xl font-bold py-4'>todosique 2.0</h1>
      <ControlsBtns />
      <AddTask />
      <TasksList />
    </div>
  );
};

export default App;
