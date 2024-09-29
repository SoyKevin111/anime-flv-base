import {renderPageContent} from "./inner_content.js";
import {renderComponentHeader} from "./outher_header.js";
import {changeTabs} from "./selection-section-header.js";

document.addEventListener("DOMContentLoaded", main);

function main(){
	renderComponentHeader();
	renderPageContent();
	changeTabs();
}

