import React from 'react';
import { Task } from '../hooks/useTasks';
import { Card, CardContent } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { toast } from './ui/use-toast';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  onEditTask: (task: Task) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onDeleteTask,
  onEditTask,
}) => {
  const handleToggleComplete = (taskId: string) => {
    console.log('TaskList: Toggling completion for task:', taskId);
    onToggleComplete(taskId);
    toast({
      description: "Task status updated",
    });
  };

  const handleDelete = (taskId: string) => {
    console.log('TaskList: Deleting task:', taskId);
    onDeleteTask(taskId);
    toast({
      description: "Task deleted",
    });
  };

  const handleEdit = (task: Task) => {
    console.log('TaskList: Editing task:', task);
    onEditTask(task);
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => handleToggleComplete(task.id)}
              />
              <div>
                <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  {task.title}
                </h3>
                {task.description && (
                  <p className="text-sm text-gray-500">{task.description}</p>
                )}
                {task.dueDate && (
                  <p className="text-xs text-gray-400">Due: {task.dueDate}</p>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleEdit(task)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(task.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};