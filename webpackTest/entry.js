var L = require('lodash');
var S = require('string');

var content = require("./content.js");

document.write(content);
document.write("<br />");

var doesIt = S('my cool string').left(2).endsWith('y');
var name = S('Your name is JP').right(2).s;

document.write(doesIt);
document.write(name);

document.write("<br/>");
module.exports.doSmth = function(str) {
	return S(str).left(2);
}