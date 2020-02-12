import React, { useState } from "react";

function App() {
	const [file, setFile] = useState();

	const handleFileOnChange = async e => {
		setFile(e.target.files[0]);
		// const formData = new FormData();
		// formData.append("file", e.target.files[0]);
		// const data = await fetch("/upload", {
		// 	method: "POST",
		// 	data: formData
		// })
		// 	.then(d => d.json())
		// 	.catch(console.error);
		// console.log("Uploaded!!", data);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append(
			"file",
			document.querySelector("input[type='file']").files[0]
		);
		console.log(formData.get("file"));
		const data = await fetch("/upload", {
			method: "POST",
			data: formData
		})
			.then(d => d.json())
			.catch(console.error);
		console.log("Done", data);
	};
	return (
		// Container
		<div className="container mx-auto px-4">
			{/* Card */}
			<div className="rounded overflow-hidden shadow-lg">
				{/* Form */}
				<div className="p-4">
					<form>
						<div className="flex w-full items-center justify-center bg-grey-lighter">
							<label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white">
								<svg
									className="w-8 h-8"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
								</svg>
								<span className="mt-2 text-base leading-normal">
									Select a file
								</span>
								<input
									type="file"
									className="hidden"
									name="file"
								/>
							</label>
						</div>
						<div className="flex w-full items-center justify-center bg-grey-lighter mt-12">
							<button
								onClick={handleSubmit}
								type="submit"
								className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
