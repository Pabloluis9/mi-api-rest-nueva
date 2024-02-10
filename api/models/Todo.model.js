const mongoose = require('mongoose');

const todosSchema = mongoose.Schema(
    {
        task: {
            type: String,
            required: [true, 'Required field'],
        },
        createdAt: {
            type: Date,
        },
        status: {
            type: String,
            enum: ["not done", "in progress", "blocked", "done"],  // Añadir coma aquí
            default: "not done"
        }
    });

    const Todos = mongoose.model('Todos', todosSchema);

    module.exports = Todos;