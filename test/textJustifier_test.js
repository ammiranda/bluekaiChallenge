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
	});
});
