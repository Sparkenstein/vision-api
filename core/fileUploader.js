"use strict";
const { promisify } = require("util");
const upload = promisify(require("./multerDiskStorage").upload);

const fileUploder = (req, res) => {
	upload(req, res)
		.then(() => {
			// req.path has path uploads/words.jpg
			console.log("req", req.file);
			res.json({ message: "Uploaded" });
		})
		.catch(err => {
			console.error(err);
			res.json({ message: "Error occurred" }).end();
		});
};

module.exports = fileUploder;
