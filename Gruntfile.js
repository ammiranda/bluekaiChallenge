module.exports = function(grunt) {
grunt.initConfig({
	jshint: {
		all: ['Gruntfile.js', 'src/*.js', 'test/*.js']
	},	
	simplemocha: {
		options: {
			globals: ['should'],
			timeout: 3000,
			ignoreLeaks: false,
			ui: 'bdd',
			reporter: 'tap'
		},

		all: {
			src: ['test/*_test.js']
		}
	}
});

grunt.loadNpmTasks('grunt-simple-mocha');
grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.registerTask('test', ['jshint', 'simplemocha']);
};
