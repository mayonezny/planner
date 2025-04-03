import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasksSlice.ts';

export const rootReducer = combineReducers({
  tasksReducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
