"use strict";
const { promisify } = require("util");
const upload = promisify(require("./multerDiskStorage").upload);
const getOCR = require("./visionapi");

const fileUploder = (req, res) => {
	upload(req, res)
		.then(async () => {
			// req.file.path has path uploads/words.jpg
			const text = await getOCR(req.file.path);
			res.json({ message: text.description });
		})
		.catch(err => {
			console.error(err);
			res.json({ message: "Error occurred" }).end();
		});
};

module.exports = fileUploder;
