document.querySelector("form").addEventListener("submit", async function(e) {
	e.preventDefault();
	const formData = new FormData();
	formData.append(
		"file",
		document.querySelector('input[type="file"]').files[0]
	);
	const data = await fetch("/upload", {
		method: "POST",
		body: formData
	}).then(response => response.json());
	console.log("DONE", data);
});
