import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Task } from '../hooks/useTasks';
import { toast } from './ui/use-toast';

interface TaskFormProps {
  onSubmit: (task: Omit<Task, 'id'>) => void;
  editingTask?: Task;
  onUpdate?: (taskId: string, task: Partial<Task>) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, editingTask, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (editingTask) {
      console.log('TaskForm: Loading task for editing:', editingTask);
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate || '');
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast({
        variant: "destructive",
        description: "Please enter a task title",
      });
      return;
    }

    if (editingTask && onUpdate) {
      console.log('TaskForm: Updating existing task:', editingTask.id);
      onUpdate(editingTask.id, {
        title,
        description,
        dueDate: dueDate || undefined,
      });
      toast({
        description: "Task updated successfully",
      });
    } else {
      console.log('TaskForm: Creating new task');
      onSubmit({
        title,
        description,
        completed: false,
        dueDate: dueDate || undefined,
      });
      toast({
        description: "Task created successfully",
      });
    }

    // Reset form
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full"
        />
      </div>
      <div>
        <Textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full">
        {editingTask ? 'Update Task' : 'Add Task'}
      </Button>
    </form>
  );
};