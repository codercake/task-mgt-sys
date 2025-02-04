export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  createdAt: string;
}

export type NewTask = Omit<Task, 'id' | 'createdAt' | 'completed'>;