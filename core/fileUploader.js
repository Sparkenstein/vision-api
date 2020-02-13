"use strict";
const { promisify } = require("util");
const upload = promisify(require("./multerDiskStorage").upload);
const getOCR = require("./visionapi");

const fileUploder = (req, res) => {
	// Upload the file
	upload(req, res)
		.then(async () => {
			// req.file.path has path uploads/words.jpg
			// Get character recognition
			const text = await getOCR(req.file.path);
			res.json({ message: text.description });
		})
		.catch(err => {
			console.error(err);
			res.json({ message: "Error occurred" }).end();
		});
};

module.exports = fileUploder;
