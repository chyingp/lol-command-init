'use strict';

// 官方文档：http://yeoman.io/authoring/integrating-yeoman.html

var debug = require('debug')('scrat:init'),
    colors = require('colors'),
    yeoman = require('yeoman-generator'),
    path = require('path'),
    localPath = path.join(__dirname, 'node_modules');

// 遍历module需要？找generator
// prepend ./node_modules to NODE_PATH
process.env.NODE_PATH = process.env.NODE_PATH ?
    localPath + ':' + process.env.NODE_PATH : localPath;

function log(type, msg, color) {
    color = color || 'grey';
    var pad = Array(Math.max(0, 10 - type.length) + 1).join(' '),
        m = type === 'error' ? type : 'log';
    console[m]((pad + type).green, msg[color]);
}    

exports.name = 'init';
exports.usage = '[options]'
exports.desc = 'init lol project';
exports.register = function(commander){
	commander
		.action(function(){
			
			var env = yeoman();
			env.lookup();

			env.on('error', function (err) {
			    if (~err.message.indexOf('You don\'t seem to have a generator with the name')) {
			        err.message = err.message.split('\n')[0];
			    }

			    log('error', err.message, 'red');
			    debug(err.stack);
			    process.exit(err.code || 1);
			});

			env.on('end', function () {
			    log('init', 'finished');
			});

			env.run('lol', {
				clean: false,
				skipInstall: false
			});

			// console.log('德玛西亚万岁！lol init is called');
		});
};
