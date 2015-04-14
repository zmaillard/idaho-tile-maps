module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			site:{
				files: [{
					expand: true, 
					cwd: 'site/',
					src: ['**'], 
					dest: '_dist/'
				}]
			}
		},
		connect: {
			server: {
				options: {
					port: 8080,
					base: '_dist',
					keepalive: true
				}
			}
		},
		bower: {
			install:{
				options:{
					targetDir: '_dist/lib'
				}
			}
		}
	});

    grunt.loadNpmTasks ("grunt-contrib-watch");
    grunt.loadNpmTasks ("grunt-exec");
    grunt.loadNpmTasks ("grunt-contrib-connect");
    grunt.loadNpmTasks ("grunt-contrib-watch");
    grunt.loadNpmTasks ("grunt-bower-task");
    grunt.loadNpmTasks ("grunt-contrib-copy");

    grunt.registerTask('build', ['copy','bower:install']);
	grunt.registerTask('default', ['build', 'connect:server']);
};