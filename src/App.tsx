import './App.css';
import ControlsBtns from './ui/controlsBtns.component';
import TasksList from './ui/tasksList.component';
import AddTask from './ui/addTask.component';

const App: React.FunctionComponent = () => {
  return (
    <div className='app-container'>
      <h1>todosique 2.0</h1>
      <ControlsBtns />
      <AddTask />
      <TasksList />
    </div>
  );
};

export default App;
