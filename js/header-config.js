export const showForm = () => {
	const formulario = document.querySelector(".formulario"),
		perfil = document.querySelector(".barra__item-perfil");

	console.log(perfil);
	console.log(formulario);

	perfil.addEventListener("click", () => {
		formulario.classList.toggle("formularioActivate");
		perfil.classList.toggle("icon__selection_header");
	})
}

export const showSearching = () => {
	const buscar_container = document.querySelector(".buscar");
	const buscar_item = document.querySelector(".barra__item-buscar");
	const buscar_btn_close = document.querySelector(".buscar__btn-close");
	const formulario = document.querySelector(".formulario"),
		perfil = document.querySelector(".barra__item-perfil");


	const testingExistForm = () => {
		if (formulario.classList.contains("formularioActivate")) {
			formulario.classList.remove("formularioActivate");
			perfil.classList.remove("icon__selection_header");
		}
	}

	const activateSearching = () => {
		testingExistForm();
		buscar_container.classList.remove("buscarDesactivate");
		buscar_container.classList.add("buscarActivate");
	};

	const desactivateSearching = () => {
		buscar_container.classList.add("buscarDesactivate");
	};

	buscar_item.addEventListener("click", activateSearching);
	buscar_btn_close.addEventListener("click", desactivateSearching);
};

export const showMenu = () => {
	const menu__btn = document.getElementById('menuButton'),
		brr_i_menu_container = document.querySelector(".barra__item-menu");
	const container_menu = document.querySelector(".menu__container");
	const $body = document.querySelector("body");

	//lista categorias
	const contenedor_listCategorias = document.querySelector(".nav__category-anime");
	//categorias'
	const icon_categorys = document.querySelector(".chebron_right");

	//seccion del menu (categorias)
	const item_alls_category = document.querySelector(".brr__menu-item-AllsCategorys");
	//open lista de categorias
	const lista_de_categorias = document.querySelector(".nav__listCategory-anime");



	const drivingBackgroundIconClose = () => {
		if (menu__btn.classList.contains("open")) {
			brr_i_menu_container.style.backgroundColor = "red";
		} else {
			brr_i_menu_container.style.backgroundColor = ""; // Para eliminar el color de fondo
		}
	}


	const drivingCategoryNoClose = () => {
		if (lista_de_categorias.classList.contains("nav__listCategory-animeActivate")) {
			return true;
		}
		return false;
	}

	const closeMenu = () => {

		if (drivingCategoryNoClose()) {
			console.log("No se puede cerrar el menú porque las categorías están abiertas.");
			return;//no cerrar el menu.
		}

		console.log("cerrando menu");
		$body.classList.remove("scroll__body_none");
		menu__btn.classList.remove("open"); //icono
		drivingBackgroundIconClose(); //background icono
		container_menu.classList.remove("border_container_menuActivate"); //close container
	}

	const openCategorys = () => {
		icon_categorys.classList.toggle("chebron_left");
		item_alls_category.classList.toggle("brr__menu-item-AllsCategorys-color");
		lista_de_categorias.classList.toggle("nav__listCategory-animeActivate");
		console.log("se abrio las categorias")
	}

	const openMenu = () => {
		$body.classList.add("scroll__body_none");
		menu__btn.classList.add("open"); //icono
		drivingBackgroundIconClose(); //background icono
		container_menu.classList.add("border_container_menuActivate"); //open container
	}

	menu__btn.addEventListener("click", openMenu);
	item_alls_category.addEventListener("click", openCategorys);
	contenedor_listCategorias.addEventListener("click", closeMenu);

}


