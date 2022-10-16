const selectedHistory =
	localStorage.getItem("item") == null
		? []
		: JSON.parse(localStorage.getItem("item"));

function addItem(event) {
	const btnCadidatar = event.target;
	btnCadidatar.classList.add("disable");
	btnCadidatar.textContent = "Você já se candidatou";

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
	const id = Number(event.target.id.substring(2));
	const [elementArray] = jobsData.filter((el) => {
		return el.id === id;
	});

	h3.textContent = elementArray.title;
	empresa.textContent = elementArray.enterprise;
	loc.textContent = elementArray.location;

	info.append(empresa, loc);
	detail.append(h3, info);

	trash.id = "s_" + id;
	trash.textContent = "T";
	trash.addEventListener("click", rmItem);

	item.append(detail, trash);

	selectedItems.appendChild(item);

	selectedHistory.push(elementArray);

	localStorage.setItem("item", JSON.stringify(selectedHistory));
}

function rmItem(event) {
	const id = Number(Number(event.target.id.substring(2)));
	const btnId = document.querySelector(`#b_${id}`);
	const selectedItems = document.querySelector(".selected-items");
	const item = event.target.parentElement;

	selectedItems.removeChild(item);

	btnId.classList.remove("disable");
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
	trash.textContent = "T";
	trash.addEventListener("click", rmItem);

	item.append(detail, trash);

	selectedItems.appendChild(item);
}
