module.exports = function(grunt) {
    
    // Autoload modules
    require("load-grunt-tasks")(grunt);
    
    grunt.initConfig({
        // Compass compilation
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                }
            }
        },
        
        // CSS Minification
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'stylesheets',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        
        // Compass watch
        watch: {
            scripts: {
                files: ['sass/**/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            }
        },
        
        // JSHint (validation)
        jshint: {
            all: ['scripts/*.js']
        },
        
        // JS Minification (Ugilfy) => to 'dist' folder
        uglify: {
            my_target: {
                files: {
                    'dist/js/main.min.js': 'scripts/main.js'
                }
            }
        },
        
        clean: {
            dist: ['dist/**/*', 'dist/.htaccess']
        },
        
        // Copy all needed files to 'dist' folder
        copy: {
            func_files: {
                files: [
                    { expand: true, src: ['.htaccess', 'storyline/*.*', 'index.html'], dest: 'dist' }
                ]
            },
            img_files: {
                files: [
                    { expand: true, src: ['img/*.*'], dest: 'dist'}
                ]
            }
        },
        
        // Replace js and CSS paths
        replace: {
            prod_paths: {
                src: ['dist/index.html'],
                overwrite: true,
                replacements: [{
                    from: 'scripts/',
                    to: 'js/'
                }, {
                    from: 'stylesheets/',
                    to: 'css/'
                }, {
                    from: '.js',
                    to: '.min.js'
                }, {
                    from: '.css',
                    to: '.min.css'
                }]
            }
        }
    });  
    
    // CSS tasks
    grunt.registerTask('css', ['cssmin']);
    // JS tasks
    grunt.registerTask('js', ['jshint', 'uglify']);
    
    // Default : compile & copy CSS files
    grunt.registerTask('default', ['clean', 'css', 'js', 'copy:func_files', 'replace', 'copy:img_files']);
}