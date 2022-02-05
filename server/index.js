const express = require("express"); //req.body
const app = express();
const cors = require("cors");
const pool = require("./db");
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

app.get("/", async(req, res) => {
    res.send("Hello world");
})
//add a review
app.post("/reviews", async(req, res) => {
    try {
        const { artist, concertName, rating } = req.body;
        const newRating = await pool.query("INSERT INTO review (artist,concertname,rating) VALUES ($1, $2, $3)", 
            [artist, concertName, rating]);
        res.json(newRating);
    } catch (err) {
        console.error(err.message);
    }
})
//get all reviews
app.get("/reviews", async(req, res) => {
    try {
        const allReviews = await pool.query("SELECT * FROM review");
        res.json(allReviews.rows);
    } catch (err) {
        console.error(err.message);
    }
})


//get a review
app.get("/reviews/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM review WHERE id =($1)", [id]);

        res.json(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//update a review
app.put("/reviews/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const { artist, concertName, rating } = req.body;
        
        const newRating = await pool.query("UPDATE review SET artist = $1, concertname = $2, rating = $3 WHERE id = $4", [artist,concertName,rating,id]);

        res.json("Rating was updated")
    } catch (err) {
        console.error(err.message);
    }
})

//delete a review
app.delete("/reviews/:id", async(req, res) => {
    try {
        const {id} = req.params;
        
        const deleteRating = await pool.query("DELETE FROM review WHERE id = $1", [id]);

        res.json("Rating was deleted")
    } catch (err) {
        console.error(err.message);
    }
})


//delete a review



app.listen(PORT, () => {
    console.log("server has started");
})