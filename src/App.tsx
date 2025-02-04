import React, { useState } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { useTasks, Task } from './hooks/useTasks';
import { Toaster } from './components/ui/toaster';

function App() {
  const { tasks, addTask, updateTask, deleteTask, toggleTaskCompletion } = useTasks();
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);

  const handleEditTask = (task: Task) => {
    console.log('App: Setting task for editing:', task);
    setEditingTask(task);
  };

  const handleUpdateTask = (taskId: string, updatedTask: Partial<Task>) => {
    console.log('App: Updating task:', taskId, updatedTask);
    updateTask(taskId, updatedTask);
    setEditingTask(undefined);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Task Manager</h1>
      <div className="space-y-8">
        <TaskForm 
          onSubmit={addTask} 
          editingTask={editingTask}
          onUpdate={handleUpdateTask}
        />
        <TaskList
          tasks={tasks}
          onToggleComplete={toggleTaskCompletion}
          onDeleteTask={deleteTask}
          onEditTask={handleEditTask}
        />
      </div>
      <Toaster />
    </div>
  );
}

export default App;