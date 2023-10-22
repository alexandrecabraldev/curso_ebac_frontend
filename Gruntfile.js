module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'dev/css/main.css':'./less/main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    'build/main.min.css':'./less/main.less'
                }
            }
        },
        replace:{
            development:{
                options:{
                    patterns:[
                        {
                            match:'CSS_URL',
                            replacement:'./css/main.css'
                        },
                        {
                            match:'JS_URL',
                            replacement:'../script.js'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten:true,
                        src:['./index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            production:{
                options:{
                    patterns:[
                        {
                            match:'CSS_URL',
                            replacement:'./main.min.css'
                        },
                        {
                            match:'JS_URL',
                            replacement:'./script.min.js'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten:true,
                        src:['./index.html'],
                        dest: 'build/'
                    }
                ]
            }
        },
        htmlmin:{
            production:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true
                },
                files:{
                    'build/index.html': './index.html',
                }
            }
        },
        uglify:{
            target:{
                files:{
                    './build/script.min.js':'./script.js'
                }
            }
        }
        
    }),

    grunt.loadNpmTasks('grunt-contrib-less'),
    grunt.loadNpmTasks('grunt-replace'),
    grunt.loadNpmTasks('grunt-contrib-htmlmin'),
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default',['less','htmlmin','uglify','replace'])

}

