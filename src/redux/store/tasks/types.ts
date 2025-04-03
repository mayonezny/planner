export interface Task {
    id: number;
    name: string;
    description: string;
    startTime: number;
    endTime: number;
    deadline: number;
    done: boolean;
  }

export interface TasksState{
    tasks: Record<number, Task>;
    lastId: number;
}

export interface TasksError{
    error: string;
}

  