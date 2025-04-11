import { Router } from "express";
import { addTask, editTask, getAllTasks, getTask, deleteTask } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.get('api/v1/tasks', getAllTasks);

taskRouter.get('api/v1/tasks/:id', getTask);

taskRouter.post('api/v1/tasks', addTask);

taskRouter.patch('api/v1/tasks/id', editTask);

taskRouter.delete('api/v1/tasks/:id', deleteTask);

export default taskRouter;