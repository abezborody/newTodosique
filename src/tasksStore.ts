import { atom } from 'jotai';

export interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const updateTask = (tasks: ITask[], id: number, newTitle: string): ITask[] =>
  tasks.map((task) => ({
    ...task,
    title: task.id === id ? newTitle : task.title,
  }));

const toggleTask = (tasks: ITask[], id: number): ITask[] =>
  tasks.map((task) => ({
    ...task,
    completed: task.id === id ? !task.completed : task.completed,
  }));

const removeTask = (tasks: ITask[], id: number) =>
  tasks.filter((task) => task.id !== id);

const addTask = (tasks: ITask[], title: string): ITask[] => [
  ...tasks,
  {
    userId: 1,
    id: Math.max(0, Math.max(...tasks.map((task) => task.id))) + 1,
    title: title,
    completed: false,
  },
];

// Jotai

export const newTaskAtom = atom<string>('');
export const tasksAtom = atom<ITask[]>([]);
export const addTaskAtom = atom(
  () => '',
  (get, set) => {
    set(tasksAtom, addTask(get(tasksAtom), get(newTaskAtom)));
    set(newTaskAtom, '');
  }
);

export const updateTaskAtom = atom(
  () => '',
  (get, set, { id, title }: { id: number; title: string }) => {
    set(tasksAtom, updateTask(get(tasksAtom), id, title));
  }
);

export const toggleTaskAtom = atom(
  () => '',
  (get, set, id: number) => {
    set(tasksAtom, toggleTask(get(tasksAtom), id));
  }
);

export const removeTaskAtom = atom(
  () => '',
  (get, set, id: number) => {
    set(tasksAtom, removeTask(get(tasksAtom), id));
  }
);
/*
// Test data
export const TASKS_DATA2: ITask[] = [
  {
    userId: 0,
    id: 0,
    title: 'Task title 0',
    completed: false,
  },
  {
    userId: 0,
    id: 1,
    title: 'Task title 1',
    completed: false,
  },
  {
    userId: 0,
    id: 2,
    title: 'Task title 2',
    completed: false,
  },
  {
    userId: 0,
    id: 3,
    title: 'Task title 3',
    completed: false,
  },
  {
    userId: 0,
    id: 4,
    title: 'Task title 4',
    completed: false,
  },
];

export const TASKS_DATA: ITask[] = [];
*/
