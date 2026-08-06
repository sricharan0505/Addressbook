const express = require("express");
const cors = require("cors"); 
require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.get("/", (req, res) => {
    res.send("Working");
});

const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});