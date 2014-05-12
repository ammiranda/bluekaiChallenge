/* Replace At method found on Stack Overflow at this link: 
http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
*/

String.prototype.replaceAt = function(index, ch) {
	return this.substr(0, index) + ch + this.substr(index + ch.length);
};

function substringModifier(substr, width){

}

function stringSplitter(string, width){
	for(var i = width - 1; string[i] !== undefined; i = i + width + 1) {
		if (string[i + 1] === " " && (i + 1) < string.length){
			string = string.replaceAt((i + 1), '\n');
		}
		else {
			substringModifier();
		}
	}
	return string;
}

module.exports = function textJustifier(string, width) {
	if (string.length <= width) {
		return string;
	}
	return stringSplitter(string, width);
};


