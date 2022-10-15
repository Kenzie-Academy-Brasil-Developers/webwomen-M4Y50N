function addItem(event) {
	console.log(event.target.id);
	const selectedItems = document.querySelector(".selected-items");

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

	h3.textContent = event.target.title;
	empresa.textContent = event.target.enterprise;
	loc.textContent = event.target.location;

	info.append(empresa, loc);
	detail.append(h3, info);

	trash.textContent = "T";

	item.append(detail, trash);

	selectedItems.appendChild(item);
}
