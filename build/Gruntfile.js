module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            lib: {
                src: ['bin/*']
            }
        },
        ts: {
            lib: {
                src: ['src/**/*.ts'],
                out: 'bin/ts.js',
                options: {
                    target: 'es3',
                    sourceMaps: false,
                    declaration: true,
                    removeComments: false
                }
            }
        },
        copy: {
            lib: {
                files: [
                    {expand: true, src: ['bin/*.js'], dest: '../lib/', filter: 'isFile'},
                ]
            }
        }
    });

    grunt.registerTask('default', ['clean', 'ts:lib', 'copy:lib']);
}
