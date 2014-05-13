function textJustifier(string, width){
	var whitespaces = [];
	var ans = "";
	for (var k = 0; k < width; k++){
		if (string[k] === " ") {
			whitespaces.push(k);
		}
	}
	for (var i = width; string[i] !== undefined; i = i + width) {
		if (string[width] === " "){
			string.replaceAt('\n', width);
			ans = ans + string[i - width];
		}
		else {
			var last = whitespaces.pop();
			string.replaceAt('\n', last);
			var diff = width - last;
			var numOfSpacesToAdd = diff / whitespaces.length;
			for (var j = 0; j < whitespaces.length; j++){

			}
		}
	}
}

function lineByLine(index, width){

}