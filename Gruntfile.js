module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.loadNpmTasks('grunt-contrib-clean');

  // Project configuration
  grunt.initConfig({

    clean: {
      dist: "dist",
      tmp: "tmp",
    },

    copy: {
      src_to_dist: {
        cwd: "src",
        expand: true,
        src: ["**/*", "!**/*.js", "!**/*.scss"],
        dest: "dist"
      },
      includes_to_dist: {
        cwd: "includes",
        expand: true,
        src: ["**/*", "!**/*.js", "!**/*.scss"],
        dest: "dist"
      },
      pluginDef: {
        expand: true,
        src: ["README.md"],
        dest: "dist"
      }
    },

    babel: {
      options: {
        sourceMap: true,
        "presets": [
          [
            "@babel/preset-env",
            {
              "useBuiltIns": "entry",
              "corejs":  "3",
            }
          ]
        ],
      },
      dist: {
        files: [{
          cwd: "src",
          expand: true,
          src: ["**/*.js", "!src/directives/*.js", "!src/filters/*.js"],
          dest: "dist",
          ext: ".js"
        }]
      }
    }, 

    jshint: {
      source: {
        files: {
          src: ["src/**/*.js"],
        }
      }, 
      options: {
        jshintrc: true,
        reporter: require("jshint-stylish"),
        ignores: [
          "node_modules/*",
          "dist/*",
        ]
      }
    }
  });

  // Default task(s)
  grunt.registerTask("default", [
    'clean',
    'copy:src_to_dist',
    'copy:pluginDef',
    'babel',
    'jshint'
  ]);
};
