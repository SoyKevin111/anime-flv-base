
export const changeTabs = () => {
	const UltimosEp = document.querySelector(".ultimosEp");
	const UltimosAnm = document.querySelector(".ultimosA");

	UltimosEp.classList.add("seccionHeader__seleccionado");

	UltimosEp.addEventListener("click", e => {
		UltimosAnm.classList.remove("seccionHeader__seleccionado");
		UltimosEp.classList.add("seccionHeader__seleccionado");
	})

	UltimosAnm.addEventListener("click", e => {
		UltimosEp.classList.remove("seccionHeader__seleccionado");
		UltimosAnm.classList.add("seccionHeader__seleccionado");
	})
};


