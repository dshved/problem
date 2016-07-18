'use strict';

module.exports = function() {
	$.gulp.task('svg', function() {
	var	config  = {
		mode : {
		view : {         // Activate the «view» mode
		bust : false,
		render : {
		scss : true      // Activate Sass output (with default options)
			}
		},
		symbol : true      // Activate the «symbol» mode
	}
};

		gulp.src('./source/images/**/*.svg')
    	.pipe(svgSprite(config))
    	.pipe(gulp.dest($.config.root + '/assets/img/icon'));
});
}