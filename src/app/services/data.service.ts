import { Injectable } from '@angular/core';

export interface Task {
  fromName: string;
  id: number;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tasks: Task[] = [
    {
      fromName: 'Tarea de prueba 1',
      id: 0,
      completed: false
    },
    {
      fromName: 'Tarea de prueba 2',
      id: 1,
      completed: false
    },
    {
      fromName: 'Tarea de prueba 3',
      id: 2,
      completed: false
    },
    {
      fromName: 'Tarea de prueba 4',
      id: 3,
      completed: false
    },
    {
      fromName: 'Tarea de prueba 5',
      id: 4,
      completed: false
    },
    {
      fromName: 'Tarea de prueba 6',
      id: 5,
      completed: false
    },
    {
      fromName: 'Tarea de prueba 7',
      id: 6,
      completed: false
    },
    {
      fromName: 'Tarea de prueba 8',
      id: 7,
      completed: false
    }
  ];

  constructor() { }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public getTaskById(id: number): Task {
    return this.tasks[id];
  }
  public markCompleted(id: number): void {
    this.tasks[id].completed = !this.tasks[id].completed;
  }
  public addTask(task: string) {
    this.tasks.push({
      fromName: task,
      id: this.tasks.length,
      completed: false
    });
  }
}
