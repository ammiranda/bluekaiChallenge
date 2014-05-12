/* Replace At method found on Stack Overflow at this link: 
http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
*/

String.prototype.replaceAt = function(index, ch) {
	return this.substr(0, index) + ch + this.substr(index + ch.length);
};

module.exports = function textJustifier(string, width) {
	if (string.length <= width) {
		return string;
	}
	if (string[width - 1] !== " ") {
		string = string.replaceAt(width, '\n');
		return string;
	}
};


