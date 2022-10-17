const selectedHistory =
	localStorage.getItem("item") == null
		? []
		: JSON.parse(localStorage.getItem("item"));

function addItem(event) {
	const btnCadidatar = event.target;
	const selectedItems = document.querySelector(".selected-items");

	//data's item
	const id = Number(event.target.id.substring(2));
	const [elementArray] = jobsData.filter((el) => {
		return el.id === id;
	});

	if (btnCadidatar.textContent === "Você já se candidatou") {
		const btnCadidatado = document.querySelector(`#s_${id}`);
		rmElementButtonItems(btnCadidatado);
	} else {
		btnCadidatar.textContent = "Você já se candidatou";

		const vazio = document.querySelector(".vazio");
		vazio.classList.add("hidden");

		const item = document.createElement("div"),
			detail = document.createElement("div"),
			h3 = document.createElement("h3"),
			info = document.createElement("div"),
			empresa = document.createElement("div"),
			loc = document.createElement("div"),
			trash = document.createElement("button");

		item.classList.add("item");
		detail.classList.add("item-details");
		h3.classList.add("title-5");
		info.classList.add("info");
		empresa.classList.add("empresa");
		loc.classList.add("location");
		trash.classList.add("trash");

		h3.textContent = elementArray.title;
		empresa.textContent = elementArray.enterprise;
		loc.textContent = elementArray.location;

		info.append(empresa, loc);
		detail.append(h3, info);

		trash.id = "s_" + id;
		trash.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
		fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  		<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 
		1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5
		 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
		</svg>`;

		trash.addEventListener("click", rmItem);

		item.append(detail, trash);

		selectedItems.appendChild(item);

		selectedHistory.push(elementArray);

		localStorage.setItem("item", JSON.stringify(selectedHistory));
	}
}

function rmElementButtonItems(el) {
	const id = Number(el.id.substring(2));
	const btnId = document.querySelector(`#b_${id}`);
	const selectedItems = document.querySelector(".selected-items");
	const item = el.parentElement;

	selectedItems.removeChild(item);

	btnId.textContent = "Candidatar";

	const [elementArray] = jobsData.filter((el) => {
		return el.id === id;
	});

	selectedHistory.splice(selectedHistory.indexOf(elementArray), 1);

	const vazio = document.querySelector(".vazio");
	if (selectedItems.children.length <= 1) {
		vazio.classList.remove("hidden");
	}

	localStorage.setItem("item", JSON.stringify(selectedHistory));
}

function rmItem(event) {
	const id = Number(Number(event.target.id.substring(2)));
	const btnId = document.querySelector(`#b_${id}`);
	const selectedItems = document.querySelector(".selected-items");
	const item = event.target.parentElement;

	selectedItems.removeChild(item);

	btnId.textContent = "Candidatar";

	const [elementArray] = jobsData.filter((el) => {
		return el.id === id;
	});

	selectedHistory.splice(selectedHistory.indexOf(elementArray), 1);

	const vazio = document.querySelector(".vazio");
	if (selectedItems.children.length <= 1) {
		vazio.classList.remove("hidden");
	}

	localStorage.setItem("item", JSON.stringify(selectedHistory));
}

function renderSelected(elem) {
	const selectedItems = document.querySelector(".selected-items");

	const vazio = document.querySelector(".vazio");
	vazio.classList.add("hidden");

	const item = document.createElement("div"),
		detail = document.createElement("div"),
		h3 = document.createElement("h3"),
		info = document.createElement("div"),
		empresa = document.createElement("div"),
		loc = document.createElement("div"),
		trash = document.createElement("button");

	item.classList.add("item");
	detail.classList.add("item-details");
	h3.classList.add("title-5");
	info.classList.add("info");
	empresa.classList.add("empresa");
	loc.classList.add("location");
	trash.classList.add("trash");

	//data's item
	const id = elem.id;
	const [elementArray] = jobsData.filter((el) => {
		return el.id === id;
	});

	h3.textContent = elementArray.title;
	empresa.textContent = elementArray.enterprise;
	loc.textContent = elementArray.location;

	info.append(empresa, loc);
	detail.append(h3, info);

	trash.id = "s_" + id;
	trash.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  	<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
	</svg>`;

	trash.addEventListener("click", rmItem);

	item.append(detail, trash);

	selectedItems.appendChild(item);
}
