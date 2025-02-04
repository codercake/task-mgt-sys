import { useState, useEffect } from 'react';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: string;
}

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      console.log('Loading saved tasks:', JSON.parse(savedTasks));
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    console.log('Saving tasks to localStorage:', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: Omit<Task, 'id'>) => {
    const task = {
      ...newTask,
      id: crypto.randomUUID(),
    };
    console.log('Adding new task:', task);
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const updateTask = (taskId: string, updatedTask: Partial<Task>) => {
    console.log('Updating task:', taskId, updatedTask);
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    console.log('Deleting task:', taskId);
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId: string) => {
    console.log('Toggling task completion:', taskId);
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
  };
};