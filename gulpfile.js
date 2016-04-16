var gulp 			= require('gulp');
var less 			= require('gulp-less');
var browserSync 	= require('browser-sync').create();
var connect 		= require('gulp-connect');
//var minifyCss 		= require('gulp-minify-css');
var rename 			= require('gulp-rename');
var autoprefixer 	= require('gulp-autoprefixer');
var image 			= require('gulp-image');
var gutil    		= require('gulp-util');
var uglify			= require('gulp-uglifyjs');
var concat  		= require('gulp-concat');
var jshint 			= require('gulp-jshint');
var gzip			= require('gulp-gzip');


// static webserver
gulp.task('webserver', ['less'], function(){
	browserSync.init({
		server: "../code/"
	});
	gulp.watch('src/less', ['less']);
	gulp.watch('src/less/').on(
		'change', browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
});

//gulp less
gulp.task('less', function(){
	return gulp.src('src/less/main.less')
		.pipe(less())
		.pipe(autoprefixer({
			browser: ['last 2 version'],
			cascade: false
		}))
		.pipe(gulp.dest('public/css/'))
		// .pipe(connect.reload());
		.pipe(browserSync.reload({stream:true}));
});


gulp.task('boot-less', function(){
	return gulp.src('less/bootstrap.less')
		.pipe(less())
		.pipe(autoprefixer({
			browser: ['last 2 version'],
			cascade: false
		}))
		.pipe(gulp.dest('public/css/'))
		// .pipe(connect.reload());
		.pipe(browserSync.reload({stream:true}));
});



gulp.task('my-js', function(){
	gulp.src('src/js/*.js')
	.pipe(uglify('all.js',{
		outSourceMap: true
		}))
	//.pipe(gzip())
	.pipe(gulp.dest('public/js/'));
});


// gulp.task('lint', function(){
// 	return gulp.src(['src/js/*.js'])
// 		.pipe(jshint())
// 		.pipe(jshint.reporter('default'));
// });

//livereload
gulp.task('css', function(){
	gulp.src('public/css/*.css')
		.pipe(connect.reload());
});

gulp.task('html', function(){
	gulp.src('*.html')
		.pipe(connect.reload());
});


//css minify
/*
gulp.task('minify-css', function(){
	return gulp.src('public/css/*.css')
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(rename({
			suffix: '.min'
			}))
		.pipe(gulp.dest('public/css/'));
});

gulp.task('images', function(){
	return gulp.src('public/img/*')
		.pipe(image({
			pngquant: true,
      		optipng: false,
      		zopflipng: true,
      		advpng: true,
      		jpegRecompress: false,
      		jpegoptim: true,
      		mozjpeg: true,
      		gifsicle: true,
      		svgo: true
		}))
		.pipe(gulp.dest('public/img-min'));
});

*/


gulp.task('compress', function(){
	gulp.src('public/css/*.css')
	.pipe(gzip())
	.pipe(gulp.dest('./public/css/'));
});


gulp.task('watch', function(){
	gulp.watch('src/less/*.less', ['less']);
	gulp.watch(['*.html'], ['html']);
	gulp.watch(['public/css/*.css'], ['css']);
	//gulp.watch('bootstrap/public/cssmin/*.css', ['minify-css']);
	// gulp.watch('src/js/*.js', ['my-js']);
	// gulp.watch('src/less/*.less', ['default']);
// gulp.watch('public/img/*', ['images']);
});

gulp.task('default', ['less', /*'my-js',*/'webserver','boot-less', 'watch', /*'minify-css', 'images', 'compress'*/]);