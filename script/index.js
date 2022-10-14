//render
function render(array) {
	array.forEach((element) => {
		const { title, enterprise, location, description, modalities } = element;
		const ul = document.querySelector(".posts"),
			li = document.createElement("li"),
			cardHead = document.createElement("div"),
			h3 = document.createElement("h3"),
			info = document.createElement("div"),
			empresa = document.createElement("div"),
			loc = document.createElement("div"),
			cardBody = document.createElement("div"),
			desc = document.createElement("p"),
			modalidades = document.createElement("div"),
			cardFooter = document.createElement("div"),
			candidatar = document.createElement("button");

		h3.textContent = title;
		empresa.textContent = enterprise;
		loc.textContent = location;
		desc.textContent = description;
		modalities.forEach((x) => {
			const modalidade = document.createElement("div");
			modalidade.classList.add("modalidade");
			modalidade.textContent = x;
			modalidades.appendChild(modalidade);
		});
		candidatar.textContent = "Candidatar";

		li.classList.add("post");
		cardHead.classList.add("card-head");
		h3.classList.add("title-4");
		info.classList.add("info");
		empresa.classList.add("empresa");
		loc.classList.add("loc");
		cardBody.classList.add("card-body");
		modalidades.classList.add("modalidades");
		desc.classList.add("desc");
		cardFooter.classList.add("card-footer");

		info.append(empresa, loc);
		cardHead.append(h3, info);

		cardBody.append(desc, modalidades);

		cardFooter.append(candidatar);

		li.append(cardHead, cardBody, cardFooter);

		ul.appendChild(li);
	});
}

render(jobsData);
