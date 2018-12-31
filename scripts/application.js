/********** APPLICATION (FIRST DRAFT) **********/

'use strict';
/* DEPENDENCIES IMPORT AS GLOBALS (INTO TOP OF SCOPE) */
/*import {create, query, queryall, getbyclass, getbyid, getbytag, append, HEAD, TITLE, BODY} from './dom.js';*/
//import {isDOM, isElement, objType, isEmptyStr, isString, log} from './utils.js';

window.onload = function () {
	displayViewportDims();
	buildElevators();
};

function displayViewportDims() {
	let delay = 66, running;// throttleSetView
	let timer = 10000, unsetid;// unsetView with setTimout
	let data, shell, atts = {// dims/target and container
		href: '#',
		id: 'viewportdata',// see #viewportdata for css
		title: 'click to stop',
		innerHTML: '<div id="dims"></div><div id="target"></div>'
	};
	shell = buildShellAppend('a', 'body', atts);
	shell.style.display = 'none';// must be set here not in css
	shell.onclick = endTask;
	window.addEventListener('resize', throttleSetView);
	function setView() {
		data = getData();
		setData();
		unsetView();// after timer ms using setTimeout
	}
	function getData() {
		let obj = {};
		obj.width = window.innerWidth;
		obj.height = window.innerHeight;
		obj.getdims = obj.width + 'px' + ' , '  + obj.height + 'px';
		obj.target = getTarget(obj.width);
		obj.getall = obj.getdims + ' | ' + obj.target;// alternate styling (not used)
		return obj;
	}
	function setData() {
		shell.firstElementChild.textContent = data.getdims;
		shell.lastElementChild.textContent = data.target;
		shell.style.display = 'block';
	}	
	function unsetView() {
		const unset = () => shell.style.display = 'none';
		clearTimeout(unsetid);
		unsetid = setTimeout(unset, timer);
	}
	function throttleSetView() {
		if (!running) {
			setView();
			running = true;
			setTimeout(() => running = false, delay);
		}
	}
    function endTask() {
		shell.style.display = 'none';
		window.removeEventListener('resize', throttleSetView);
	}
}

function buildElevators(top='header', bot='footer') {// animation handed to css
	top = document.querySelector(top);
	top.id = 'goingup';
	let atts = {
		class: 'elevator top',
		innerHTML: '<a href="#goingdown" title="going down?">ELEVATOR</a>'
	}
	top = buildShellAppend('div', top, atts, 'prepend');
	bot = document.querySelector(bot);
	bot.lastElementChild.id = 'goingdown';
	atts = {
		class: 'elevator bot',
		innerHTML: '<a href="#goingup" title="going up?">ELEVATOR</a>'
	}
	bot = buildShellAppend('div', bot, atts);
}

/* helper functions */

function getTarget(width) {// separate function for quick access
	const mop = 375, mol = 480, tab = 768, dsk = 992;
	if (width < mol) return 'mobile portrait';
	if (width >= mol && width < tab) return 'mobile landscape';
	if (width >= tab && width < dsk) return 'tablet';
	return 'desktop';
}

function buildShellAppend(tag, node, atts, mode) {
	tag = document.createElement(tag);// tag is new element
	if(!isElement(node)) {// node is parent element
		node = document.querySelector(node) || document.body;
	}
	if(atts) {
		setHTMLAttributes(tag, atts);
	}
	if(mode === 'prepend') {
		return node.prepend(tag);
	}
	return node.appendChild(tag);
}

function setHTMLAttributes(el, atts) {
	for(const key in atts) {
		if (key === 'innerHTML') el.innerHTML = atts[key];
		else el.setAttribute(key, atts[key]);
	}
	return el;
}

function isElement(obj) {
    return obj instanceof Element || obj instanceof HTMLDocument;
}