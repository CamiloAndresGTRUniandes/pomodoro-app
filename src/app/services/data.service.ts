import { Injectable } from '@angular/core';

export interface Task {
  fromName: string;
  id: number;
  completed: boolean;
  workCycleQty?: number;
  workCyclePlayed?: number;
  longRestQty?: number;
  workCycleTime?: number;
  shortRestTime?: number;
  longRestTime?: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tasks: Task[] = [
    {
      fromName: 'Tarea de prueba 1',
      id: 0,
      completed: false,
      workCycleQty: 4,
      workCyclePlayed: 1,
      longRestQty: 4,
      workCycleTime: 25,
      shortRestTime: 5,
      longRestTime: 15
    },
    {
      fromName: 'Tarea de prueba 2',
      id: 1,
      completed: false,
      workCycleQty: 4,
      workCyclePlayed: 1,
      longRestQty: 4,
      workCycleTime: 25,
      shortRestTime: 5,
      longRestTime: 15
    },
    {
      fromName: 'Tarea de prueba 3',
      id: 2,
      completed: false,
      workCycleQty: 4,
      workCyclePlayed: 1,
      longRestQty: 4,
      workCycleTime: 25,
      shortRestTime: 5,
      longRestTime: 15
    },
    {
      fromName: 'Tarea de prueba 4',
      id: 3,
      completed: false,
      workCycleQty: 4,
      workCyclePlayed: 1,
      longRestQty: 4,
      workCycleTime: 25,
      shortRestTime: 5,
      longRestTime: 15
    },
    {
      fromName: 'Tarea de prueba 5',
      id: 4,
      completed: false,
      workCycleQty: 4,
      workCyclePlayed: 1,
      longRestQty: 4,
      workCycleTime: 25,
      shortRestTime: 5,
      longRestTime: 15
    },
    {
      fromName: 'Tarea de prueba 6',
      id: 5,
      completed: false,
      workCycleQty: 4,
      workCyclePlayed: 1,
      longRestQty: 4,
      workCycleTime: 25,
      shortRestTime: 5,
      longRestTime: 15
    },
    {
      fromName: 'Tarea de prueba 7',
      id: 6,
      completed: false,
      workCycleQty: 4,
      workCyclePlayed: 1,
      longRestQty: 4,
      workCycleTime: 25,
      shortRestTime: 5,
      longRestTime: 15
    },
    {
      fromName: 'Tarea de prueba 8',
      id: 7,
      completed: false,
      workCycleQty: 4,
      workCyclePlayed: 1,
      longRestQty: 4,
      workCycleTime: 25,
      shortRestTime: 5,
      longRestTime: 15
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
  public deleteTask(id: number) {
    this.tasks.splice(id, 1);
  }
}
