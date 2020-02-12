"use strict";

const multer = require("multer");
const crypto = require("crypto");
const id = crypto.randomBytes(4).toString("hex");
const path = require("path");

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
