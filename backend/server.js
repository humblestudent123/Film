// Backend: Movie Server (Node.js + Express)
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const moviesDir = path.join(__dirname, "movies");

app.get("/movies/:filename", (req, res) => {
    const filePath = path.join(moviesDir, req.params.filename);
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send("Movie not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});