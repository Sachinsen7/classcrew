const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

dotenv.config({path:".env.dev"});
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./modules/auth/auth.routes"));

app.get("/", (req, res) => {
    res.send("class crew backend change");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
