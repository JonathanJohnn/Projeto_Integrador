const inputFiles = document.querySelector(".fotoPerfil");
const pictureImage = document.querySelector(".foto");
const picturreImageText = "escolha uma imagem";
pictureImage.innerHTML = picturreImageText;

	inputFiles.addEventListener("change", function (e){
		const inputTarget = e.target;
		const file = inputTarget.files[0];

		if (file) {
			const reader = new FileReader();

			reader.addEventListener("load", function (e) {
				const readerTarget = e.target;

				const img = document.createElement("img");
				img.src = readerTarget.result;
				img.classList.add("foto");

				pictureImage.innerHTML = "";
				pictureImage.appendChild(img);
			});
			
			reader.readAsDataURL(file);
		} else {
			pictureImage.innerHTML = picturreImageText;
		}
	});