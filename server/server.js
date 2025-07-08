const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require("cors");

mongoose.connect("mongodb+srv://buriashokkumar:buriashokkumar24@firstcluster.7fo5ma1.mongodb.net/").then(() => console.log("MongoDB Connected"))
.catch(() => console.log(error));
const app = express();
const PORT = process.env.PORT || 5000;
app.use(
    cors({
        origin :'http://localhost:5173/',
        methods : ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "pragma",
        ],
        credentials : true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
