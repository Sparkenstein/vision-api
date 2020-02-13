"use strict";

const vision = require("@google-cloud/vision");

// Call vision lib, get recognition
const getOCR = async path => {
	const client = new vision.ImageAnnotatorClient();
	const [result] = await client.textDetection(path);
	const annotations = result.textAnnotations[0];
	return annotations;
};

module.exports = getOCR;
