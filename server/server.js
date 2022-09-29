import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from 'mongoose';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';

const csrfProtection = csrf({
  cookie: true
});

const morgan = require("morgan");

require("dotenv").config();

// create express app
const app = express();

// apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Connect database
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

// route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// CSRF
app.use(csrfProtection)

app.get('/api/csrf-token', (req, res) => {
  res.json({
    csrfToken: req.csrfToken()
  });
})

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));