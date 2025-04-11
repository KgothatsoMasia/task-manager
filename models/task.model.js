import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [3,"name must be at least 3 characters"],
        maxLength: [20, "Name should not be more than 20 characters"]
    },
    
    completed: {
        type: Boolean,
        default: false
    }

},

{timestamps: true});

const Task = mongoose.model('Task', taskSchema);

export default Task;