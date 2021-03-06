"use strict";
// Imports
const express = require("express");
const fileUploder = require("./core/fileUploader");
const { existsSync, mkdirSync } = require("fs");

// constants
const PORT = parseInt(process.env.PORT, 10) || 4000;

// Initialization
const app = express();

// Middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.post("/upload", (req, res) => {
	fileUploder(req, res);
});

app.listen(PORT, () => {
	// Using synchronous variants deliberately
	if (!existsSync("uploads")) {
		mkdirSync("uploads");
	}
	console.log(`Server started at http://localhost:${PORT}`);
});
