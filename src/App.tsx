import ControlsBtns from './ui/controlsBtns.component';
import TasksList from './ui/tasksList.component';
import AddTask from './ui/addTask.component';

const App: React.FunctionComponent = () => {
  return (
    <div className='flex-col mx-auto'>
      <h1 className='text-lg font-bold'>todosique 2.0</h1>
      <ControlsBtns />
      <AddTask />
      <TasksList />
    </div>
  );
};

export default App;
