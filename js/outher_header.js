import { showForm } from "./header-config.js";
import { showSearching } from "./header-config.js"; 
import { showMenu } from "./header-config.js";

const includeHTML = async (el, url) => {
	try {
		const response = await axios.get(url);
		if (response.status >= 200 && response.status < 300) {
			el.outerHTML = response.data
		}
		else {
			let message = response.statusText || "error al cargar el archivo."
			el.outerHTML = `<div><p>Error: ${message}</p></div>`;
		}
	} catch (error) {
		let message = error.message || "error al cargar el archivo."
		el.outerHTML = `<div><p>Error: ${message}</p></div>`;
	}
}

export const renderComponentHeader = () =>{
	const elementosToInclude = document.querySelectorAll("[data-include]");
	elementosToInclude.forEach(async (elemento) => {
		await includeHTML(elemento, elemento.getAttribute("data-include"));
		showForm();
		showSearching();
		showMenu();
	});
}



