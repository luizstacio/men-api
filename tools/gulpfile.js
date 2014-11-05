var gulp = require('gulp');
var replace = require('gulp-replace');
var jeditor = require('gulp-json-editor');
var minimist = require('minimist');
var fs = require('fs');

/* simplify argvs */
var options = minimist(process.argv.slice(2));

/*
 * options
 *    --module <name of module>
 */

/* vars module */
var __SCHEMA_NAME_TITLEIZE__ =  '';
var __SCHEMA_NAME_LOWERCASE__ = '';
var __SCHEMA_NAME_UPPERCASE__ = '';
var pathModule = '';
var pathModules = '';
var pathModuleRoute = '';
var moduleURL = '';

/* init vars for generators */
function initVarsModule() {
  var moduleName = options.module.toLowerCase();
  var moduleNamePluralized = moduleName.replace(/([a-zA-Z]+)/, '$1s').replace(/s+$/, 's');
  var moduleNameNonPluralized = moduleNamePluralized.replace(/s+$/, '');
  
  __SCHEMA_NAME_TITLEIZE__ = moduleNameNonPluralized[0].toUpperCase() + moduleNameNonPluralized.slice(1);
  __SCHEMA_NAME_LOWERCASE__ = moduleNameNonPluralized;
  __SCHEMA_NAME_UPPERCASE__ = moduleNameNonPluralized.toUpperCase();
  pathModule = './modules/' + moduleNamePluralized;
  pathModules = '.' + pathModule;
  pathModuleRoute = pathModule + '/routes';
  moduleURL = '/api/' + moduleNamePluralized;

  /* Verify exists module with name equal */
  if (fs.existsSync(pathModules)) {
    throw ('This module already exists! Please check the name.');
  }
} 

/* Generate module */
gulp.task('generate-module', function () {

  var filesMolude = [
        './base/controller.js',
        './base/model.js',
        './base/routes.js'
      ];
 
  /* init vars */
  initVarsModule();

  gulp.src(filesMolude)
    .pipe(replace(/__SCHEMA_NAME_TITLEIZE__/g, __SCHEMA_NAME_TITLEIZE__))
    .pipe(replace(/__SCHEMA_NAME_LOWERCASE__/g, __SCHEMA_NAME_LOWERCASE__))
    .pipe(replace(/__SCHEMA_NAME_UPPERCASE__/g, __SCHEMA_NAME_UPPERCASE__))
    .pipe(gulp.dest(pathModules));
});

/* Generate routes */
gulp.task('generate-route', function () {
  var routes = '../routes.json';

  /* init vars */
  initVarsModule();

  function addRoute (jsonRoutes) {

    /* Verify exists module with name equal */
    notExistsRoute = !jsonRoutes.filter(function(route){
      return route.url === moduleURL;
    }).length;

    if ( notExistsRoute ) {
      jsonRoutes.push({
        url: moduleURL,
        path: pathModuleRoute
      });
    }

    return jsonRoutes;
  }

  gulp.src(routes)
    .pipe(jeditor(addRoute))
    .pipe(gulp.dest('../'));
});

/* Generate routes and module */
gulp.task('generate', [
  'generate-module',
  'generate-route'
]);