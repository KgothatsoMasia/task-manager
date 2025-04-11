import Task from "../models/task.model.js";

export const getAllTasks = async (req, res) => {

    try {
        const allTasks = await Task.find({});

        res.status(200).json({ allTasks, total: allTasks.length });

    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

export const getTask = async (req, res) => {
    
    try {
        const { id:taskID } = req.params;

        const task = await Task.findOne({_id:taskID});  
        if (!task) {           
            return res.status(404).json({message: `No task with id: ${taskID}`})
        }

        res.status(200).json({ task });

    } catch(error) {
        res.status(500).json({message: error.message})
    }
};

export const addTask = async (req, res) => {

    try{       
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
};

export const editTask = async (req, res) => {
    
    try {

        const { id:taskID } = req.params;

        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).json({message: `No task with id: ${taskID}`})
        }

        res.status(200).json({task});

    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

export const deleteTask = async (req, res) => {
    
    try {
        const { id:taskID } = req.body;

        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task) {
            return res.status(404).json({message: `No task with id: ${taskID}`})
        } else {
            res.status(201).json({message: `Task with id: ${taskID} has been removed from the database`});
        }

        res.status(200).json({task});

    } catch(error) {
        res.status(500).json({message: error.message});
    }
};