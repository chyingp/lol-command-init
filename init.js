'use strict';

exports.name = 'init';
exports.usage = '[options]'
exports.desc = 'init lol project';

exports.register = function(commander){
	commander
		.action(function(){
			console.log('德玛西亚万岁！lol init is called');
		});
};