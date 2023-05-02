const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-asaa');

// compile SASS
gulp.task('sass', function (){
	return gulp.src(['src/scss/bootstrap.scss', 'src/scss/*.scss'])
	.pipe(sass())
	.pipe(gulp.dest("src/css"))
	.pipe(browserSync.stream());
});

// Move js Files to SRC
gulp.task('js', function(){
	return gulp.src(['bootstrap-4.5.0/dist/js/bootstrap.min.js', 
		'bootsrap-4.5.0/jquery/jquery.min.js', 'bootsrap-4.5.0/tether/tether.min.js'])
	.pipe(gulp.dest("src/js"))
	.pipe(browserSync.stream());
});

// Watch SASS & Serve
gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: "./src"
	});

	gulp.watch(['src/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
	gulp.watch("src/*.html*").on('change', browserSync.reload);
});

// Move font Awesome Fonts folder to src
gulp.task('fonts', function() {
	return gulp.src('bootstrap-4.5.0/font-awesome/fonts/*')
	.pipe(gulp.dest("src/fonts"));
});

// Move font awesome css file
gulp.task('fa', function() {
	return gulp.src('bootstrap-4.5.0/font-awesome/fonts/font-awesome.min.css')
	.pipe(gulp.dest("src/css"));
});

gulp.task('default', ['js', 'serve', 'fa', 'fonts'])















