document.querySelector("form").addEventListener("submit", async function(e) {
	e.preventDefault();
	const spinner = document.querySelector(".loader");
	spinner.classList.remove("mhidden");
	const files = document.querySelector('input[type="file"]').files[0];
	const textArea = document.querySelector("textarea");
	if (!files) {
		textArea.innerText = "Please Select a file";
		spinner.classList.add("mhidden");
		return;
	}
	const formData = new FormData();
	formData.append("file", files);
	const data = await fetch("/upload", {
		method: "POST",
		body: formData
	})
		.then(response => response.json())
		.catch(e => {
			spinner.classList.add("mhidden");
			console.error("Error occurred");
		});
	textArea.innerHTML = data.message;
	spinner.classList.add("mhidden");
});

document.querySelector('input[type="file"]').addEventListener(
	"change",
	function(e) {
		const reader = new FileReader();
		reader.onload = function(e) {
			const source = document.querySelector("#source");
			source.setAttribute("src", e.target.result);
			source.setAttribute("width", "400");
			source.setAttribute("height", "400");
		};

		reader.readAsDataURL(e.target.files[0]);
	},
	false
);
