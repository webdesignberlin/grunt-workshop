/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // add config paths
        config: {
            dist: '_html'
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'  // css_dir = 'dev/css'
                }
            }
        },


        bgShell: {
            _defaults: {
                // let the command work in background
                bg: true
            },
            watchCompass: {
                cmd: 'compass watch'
            }
        },

        'grunticon-sass': {
            icons: {
                options: {
                    // required config
                    src: "<%= config.dist %>/images/icons/sprites",
                    dest: "scss/icons",

                    // optional grunticon config properties
                    // SVGO compression, false is the default, true will make it so
                    svgo: true,

                    // PNG compression, true is the default, false will skip it
                    pngcrush: false,

                    // CSS filenames
                    datasvgcss: "_icons.data.svg.scss",
                    datapngcss: "_icons.data.png.scss",
                    urlpngcss: "_icons.png.scss",

                    // preview HTML filename
                    previewhtml: false,

                    // grunticon loader code snippet filename
                    loadersnippet: false,

                    // folder name (within dest) for png output, depending on the scss output
                    pngfolder: "../<%= config.dist %>/images/icons-png/",

                    // prefix for CSS classnames
                    cssprefix: "icon-",
                    // css file path prefix - this defaults to "/" and will be placed before the "dest" path when stylesheets are loaded.
                    // This allows root-relative referencing of the CSS. If you don't want a prefix path, set to to ""
                    cssbasepath: "/",

                    // placeholder extends
                    pseudoselectors: true,

                    // path to icons for css
                    pngPath: '<%= config.dist %>/images/icons-png/'
                }
            }
        },

        // Configuration to be run (and then tested).
        "svg-sprites": {
            options: {
                paths: {
                    spriteElements: "<%= config.dist %>/images/icons",
                    sprites: "<%= config.dist %>/images/sprites",
                    css: "scss/sprites"
                },
                prefix: "sprite",
                sizes: {
                    small: 50,
                    medium: 100,
                    large: 125
                },
                refSize: 100,
                unit: 5
            }
        },

        // Add connection for local server
        connect: {
            options: {
                // define port for localhost
                port: 9000,
                livereload: 35729, // add a custom port for livereload

                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost' // 127.0.0.1
            },
            // integrate livereload
            livereload: {
                options: {
                    // let the connection open
                    open: true,
                    // define the base if necessary
                    base: [
                        ''
                    ]
                }
            }
        },

        watch: {
            scss: {
                files: ['scss/*.scss'],
                tasks: ['compass:dist']
            },
            // integrate livereload
            livereload: {
                options: {
                    // take the options from connect task
                    livereload: '<%= connect.options.livereload %>'
                },
                // reload the site if one of the following files has changed
                files: [
                    '<%= config.dist %>/*.html',
                    '<%= config.dist %>/css/{,*/}*.css',
                    '<%= config.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    'scss/*.scss'
                ],
                // assemble
                assemble: {
                    files: ['{pages,data,templates,partials}/**/{,*/}*.{md,hbs,yml}'],
                    tasks: ['assemble']
                }
            }
        },

        assemble: {
            options: {
                // asset directory (css, img, js) for template
                assets: '<%= config.dist %>',
                // define your partial paths
                partials: ['partials/**/*.hbs'],
                // define your main templates
                layout: ['templates/default.hbs'],
                // define your data directory
                data: ['data/*.{json,yml}'],
                // output your defined pages without subfolder if true
                flatten: true
            },
            // define your page directory
            pages: {
                src: ['pages/*.hbs'],
                dest: '<%= config.dist %>/'
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bg-shell');
    grunt.loadNpmTasks('grunticon-sass');
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('dr-grunt-svg-sprites');


    // Default task.
    grunt.registerTask('build', ['assemble']);
    grunt.registerTask('css', ['compass']);
    grunt.registerTask('localhost', ['connect:livereload']);
    grunt.registerTask('icons', ['grunticon-sass']);
    grunt.registerTask('sprites', ['svg-sprites']);
    grunt.registerTask('bg', ['bgShell:watchCompass', 'watch:livereload']);
    grunt.registerTask('default', ['css', 'watch:livereload']);
    grunt.registerTask('server', ['build','bgShell:watchCompass', 'localhost', 'watch:livereload']);

};