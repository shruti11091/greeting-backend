const express = require("express");
const cors = require("cors");
const greetRoutes = require("./routes/greet.js");

const app = express();
app.use(cors());

app.use("/api", greetRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
