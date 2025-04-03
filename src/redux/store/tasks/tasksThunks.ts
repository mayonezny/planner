// import { createAsyncThunk } from "@reduxjs/toolkit/react";
// import { Task, TasksError } from "./types";
// import { AxiosResponse } from "axios";

// const addTask = createAsyncThunk<object, Task, { rejectValue: TasksError }>(
//     'tasks/addTask',
//     async ({ name, description, startTime, endTime, deadline }, { rejectWithValue }) => {
//       try {
//         const response: AxiosResponse<object> = await api.post(`${TASKS}/addTask`, {
//           name,
//           description,
//           startTime,
//           endTime,
//           deadline
//         });
//         return response.data;
//       } catch (error) {
//         console.log(error);
//         return rejectWithValue({ error: error?.response?.data?.message || error.message });
//       }
//     },
//   );


//   const fetchTask = createAsyncThunk<object, Task, { rejectValue: TasksError }>(
//     'tasks/fetchTask',
//     async ({ id }, { rejectWithValue }) => {
//       try {
//         const response: AxiosResponse<object> = await api.get(`${TASKS}/fetchTask/${id}`);
//         return response.data;
//       } catch (error) {
//         console.log(error);
//         return rejectWithValue({ error: error?.response?.data?.message || error.message });
//       }
//     },
//   );

// const updateTask = createAsyncThunk<object, Task, { rejectValue: TasksError }>(
//     'tasks/updateTask',
//     async ({ id, name, description, startTime, endTime, deadline }, { rejectWithValue }) => {
//       try {
//         const response: AxiosResponse<object> = await api.put(`${TASKS}/updateTask/${id}`, {
//           name,
//           description,
//           startTime,
//           endTime,
//           deadline
//         });
//         return response.data;
//       } catch (error) {
//         console.log(error);
//         return rejectWithValue({ error: error?.response?.data?.message || error.message });
//       }
//     },
//   );
  
// const deleteTask = createAsyncThunk<object, Task, { rejectValue: TasksError }>(
//     'tasks/deleteTask',
//     async ({ id }, { rejectWithValue }) => {
//       try {
//         const response: AxiosResponse<object> = await api.delete(`${TASKS}/deleteTask/${id}`);
//         return response.data;
//       } catch (error) {
//         console.log(error);
//         return rejectWithValue({ error: error?.response?.data?.message || error.message });
//       }
//     },
//   );