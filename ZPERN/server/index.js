const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); // connecting our db to the server

//middleware
app.use(cors());
app.use(express.json()); //req.body

// POST - INSERT //
// GET - SELECT  // 
// PUT - UPDATE //
// DELETE - DELETE //

// ROUTES //

// Create a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",  // The RETURNING * is used only for INSERT, UPDATE, DELETE and return back the data.
            [description]
        );

        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});

// get all todo (read)

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message)
    }
});

// get a SPECIFIC todo (read)

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])

        res.json(todo.rows[0])
    } catch (err) {
         console.error(err.message)
    }
});
 

// update a todo

app.put("/todos/:id", async (req, res) => {
    try {
         const { id } = req.params;
         const { description } = req.body;
         const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description], [id] );

         res.json("Todo was updated")

    } catch (err) {
        console.error(err.message)
    }
});

// delete a todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const  { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("Todo was deleted!")
    } catch (err) {
        console.err(err.message)
    }
});



app.listen(5000, () => {
    console.log('server working')
});
