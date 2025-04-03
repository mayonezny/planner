// features/task/ui/TaskList.tsx
import { useAppDispatch, useAppSelector } from '../../redux/hooks/index.ts';
import { addTask, updateTask, deleteTask, resetTasks } from '../../redux/store/tasks/tasksSlice.ts'

export const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);

  const handleAddTask = () => {
    dispatch(addTask({ name: 'Новая задача', description: 'ivan', startTime: 13, endTime: 14, deadline: Date.parse('2025-04-11'), done: false }));
  };

  const handleUpdateTask = (id: number) => {
    const task = tasks[id];
    if (task) {
      dispatch(updateTask({ id: id, name: 'Огого', description: 'ivan', startTime: 13, endTime: 14, deadline: Date.parse('2025-04-11'), done: true }));
    }
  };

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <button onClick={handleAddTask}>Добавить задачу</button>
      <div>
        {Object.values(tasks).map((task) => (
          <div key={task.id}>
            <span>{task.name}: {task.description} — {task.done ? '✅' : '❌'}</span>
            <button onClick={() => handleUpdateTask(task.id)}>Toggle</button>
            <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};
