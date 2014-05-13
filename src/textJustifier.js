/* Replace At method found on Stack Overflow at this link: 
http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
*/

String.prototype.replaceAt = function(index, ch) {
	return this.substr(0, index) + ch + this.substr(index + ch.length);
};

/* String Splitter iterates through the passed in string and replaces white space characters that 
occur at the width with newline characters and then returns the string at the conclusion of the loop.*/

function stringSplitter(string, width){
	for(var i = width - 1; string[i] !== undefined; i = i + width + 1) {
		if (string[i + 1] === " " && (i + 1) < string.length){
			string = string.replaceAt((i + 1), '\n');
		}
	}
	return string;
}

/* Text Justifier is a function that is exported as a module in order to be tested using Mocha and
Chai.  It handles the base case for when the whole string is shorter than the desired width and 
simply returns the string as a result. Otherwise it returns what String Splitter returns given
the passed in arguments */

function textJustifier(string, width) {
	var ans = "";
	if (string.length <= width) {
		return string;
	}
	return stringSplitter(string, width);
}

module.exports = textJustifier;


