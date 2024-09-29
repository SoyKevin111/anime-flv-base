const d = document,
	$main = d.querySelector("main");


const getHTML = async (options) => {
	try {
		const response = await axios.get(options.url);
		$main.innerHTML = response.data
	} catch (error) {
		$main.innerHTML = `<h1>Error de carga de pagina : ${error.response.status}</h1>`
	}
}

export const renderPageContent = () => {
	getHTML({
		url: "html/ultimos_ep.html",
	});


	d.addEventListener("click", e => {
		if (e.target.matches(".opciones a")) {
			e.preventDefault();
			try {
				getHTML({
					url: e.target.href,
				})
			} catch (error) {
				$main.innerHTML = `<h1>Error de carga de pagina : ${error.response.status}</h1>`
			}
		}
	})
}