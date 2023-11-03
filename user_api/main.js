const express = require("express");
const cors = require("cors");
//
const userRoutes = require("./routes/userRoutes");
const { logger } = require("./middleware/logger");
const port = 8008;

const app = express();
//midleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

// app.use(logger);

//// api/users
app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Server running at http:localhost:${port}`));
