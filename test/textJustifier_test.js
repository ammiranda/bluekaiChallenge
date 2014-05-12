var textJustifier = require('../src/textJustifier');
var should = require('chai').should();

describe('textJustifier_test', function() {
	describe('textJustifier', function() {
		it('function should return proper output', function() {
			textJustifier("That's one small step for man, one giant leap for mankind.", 20).should.equal("That's   one   small\nstep  for  man,  one\ngiant    leap    for\nmankind.");
		});
		it('function should return proper output', function() {
			textJustifier("We hold these truths to be self-evident, that all men are created equal.", 20).should.equal("We hold these truths\nto  be self-evident,\nthat  all   men  are\ncreated equal.");
		});
		it('function should return string as is if length of width is longer than inputted string', function() {
			textJustifier("Mom loves pie.", 20).should.equal("Mom loves pie.");
		});
		it('function should create a newline when string length exceeds the width length at a non-whitespace character', function(){
			textJustifier("Bob loves food alot.", 14).should.equal("Bob loves food\nalot.");
		});
	});
});
