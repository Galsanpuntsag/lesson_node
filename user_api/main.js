const express = require("express");
//
const userRoutes = require("./routes/userRoutes");

const port = 8008;

const app = express();

app.use(express.json());

// app.use(logger);

//// api/users
app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Server running at http:localhost:${port}`));
