"use strict";

const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const id = crypto.randomBytes(4).toString("hex");

// Custom disk storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads");
	},
	filename: async (req, file, cb) => {
		cb(null, `${id}${path.extname(file.originalname)}`);
	}
});

exports.upload = multer({
	storage
}).single("file");
