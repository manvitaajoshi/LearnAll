// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js"

const app = express();
//const PORT = process.env.PORT || 5500;

// as we cannot expose secret keys and stuffs openly
//require("dotenv").config();

// middleware
app.use("/posts", postRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(function (req, res, next) {
	//Enabling CORS
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x - client - key, x - client - token, x - client - secret, Authorization");
      next();
});


const CONNECTION_URL = "mongodb+srv://manvita:manvitajoshi@cluster0.32rm0.mongodb.net/students?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5500;

//routes
app.get("/", (req, res) => {
	res.send("Hii! Monkey likes bananas!");
});

// connecting the database
const connectionString = process.env.ATLAS_URI;
// mongodb+srv://yashpatel:yash1901@cluster0.32rm0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log("hiiiii"));

// // running the app
// app.listen(PORT, () => {
// 	console.log(`Server running on http://localhost:${PORT}`);
// });

