module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            style: {
            	files: {'less/main.css' : 'less/style.less' }
            }
        },
        
        watch: {
        	css: {
        		files:['less/*.less', 'less/base/*.less'],
        		tasks: ['less:style'],
        		options: {
        			spawn: false
        		}
        			
        	}
        },

    });


   grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default','watch');

};