'use strict';
includes();
function includes(){
    let el = new Element('a', 'b', {'c': 1, 'd': 2, 'e': 3});
    console.log(Object.getPrototypeOf( el ) === Element.prototype);
    console.log(el.constructor.name);
    for(const prop in el) console.log(prop);
    const obj = document.getElementsByTagName('div');
    console.log( 'isDOM(obj): ' + isDOM(obj));
    if(obj.nodeType) console.log( 'obj.nodeType: ' + obj.nodeType);
}
function buildNav(){
    const els = constructElements(navData()), arr = [];
    for(const item of els) arr.push(createElement(item));
    document.getElementsByTagName('nav')[0].appendChild(constructList(arr));
}
function buildRes() {
    
    for(const item of resData())
    document.head.appendChild(createElement(item));
}     

function linkData() {
    const dat = [];
    dat[0] = ['2ality', 'http://2ality.com'];
    dat[1] = ['lea.verou', 'http://lea.verou.me'];
    dat[2] = ['alistapart', 'https://alistapart.com'];
    return dat;
}
function navData() {
    const dat = [];
    dat[0] = {text: 'HOME', href: 'index.html'};
    dat[1] = {text: 'GD&T', href: 'index.html'};
    dat[2] = {text: 'SOLIDWORKS', href: 'index.html'};
    dat[3] = {text: 'CALCULATORS', href: 'index.html'};
    dat[4] = {text: 'CONTACT', href: 'index.html'};
    return dat;
}
function data() {/* hoist resources data */
    const dat = [];// dat[] order is important
    dat[0] = 'styles/normalize.css';
    dat[1] = 'styles/base.css';
    dat[2] = 'styles/layout.css';
    dat[3] = 'scripts/app.js';
    return dat;// array of Element objects
}

/* DOM Helpers */

function Collection(coll, node, atts, ...query){/* Constructor */
    coll = this.coll;// array of data to create html
    Base.call(this, node, atts, ...query);
    // Element = {node, text, atts: {href ,src, target,...}}
}

function Base(node, atts, ...query){/* Element data constructor */
    if(node) this.node = node;
    if(atts) this.atts = atts;
    if(query) this.query = query;// for text use atts.textContent;
    // Element = {node, text, atts: {href ,src, target,...}}
}

function assemble() {}

Base.prototype.query = function(selector) {
    if(isDOM(selector)) return selector;
    if(Array.isArraY(selector)) return selector;
    if(isObjectLiteral(selector)) {
        for([key, val] in selector) {
            if(val === 'head') return document.head;
            if(val === 'body') return document.body;
            if(val === 'nav' || val === 'main' || val === 'content' || val = 'footer') {
                return document.getElementsbyTagName(val)[0];
            99}
            if(key === 'tag') return document.getElementsbyTagName(val)[0];
            if(key === 'tags') return document.getElementsbyTagName(val);
            if(key === 'id') return document.getElementbyId(val);
            if(key === 'class') return document.getElementsbyClassName(val);
            if(key === 'sel') return document.querySelector(val);
            if(key === 'all') return document.querySelectorAll(val);
        }
    if(isString(selector)) return document.querySelect(val);
    }
}
Element.prototype.create = function() {// from Element object
    let el;
    if(node) el = document.createElement(this.node);
    if(atts) {
        for(let key in this.atts) el.setAttribute(key, this.atts[key]);
    }
    return el;
}

Element.prototype.query = function() {// from Element object
    
}

function constructList(arr, type = 'ul'){// from array
    const el= document.createElement(type),// for ol specify type = 'ol'
          li = document.createElement('li');
    for(const item of arr) {
          f
        li.appendChild(item);
        el.appendChild(li);
    }
    return el;
}

/* const create = document.createElement.bind(document);
const query = document.querySelector.bind(document);
const getbyid = document.getElementById.bind(document);
const getbytag = document.getElementsByTagName(document);*/
function isDOM(obj) {
    return (obj.nodeType && !isObjectLiteral(obj))? true : false;
}

function objType(obj) {
	let type = Object.prototype.toString;
	return type.call(obj);
}
function isObjectLiteral(obj) {
  return obj ? obj.constructor === {}.constructor : false;
}
function isEmpty(str){
	return (str == null || str.length === 0 || str.trim().length === 0)? true: false;
}
function isString(str){
	return (typeof str === 'string' || str.constructor === String)? true: false;
}
