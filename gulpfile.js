const {src, dest, watch, parallel, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const webp = require('gulp-webp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
// const rename = require('gulp-rename');


function css() {
    return src('src/scss/**/*.scss') 
        .pipe(sass())
        .pipe( dest('./build/css') );

   
}

function javascript() {
    return src('src/js/**/*.js')
    //   .pipe(sourcemaps.init())
    //   .pipe(concat('bundle.js')) // final output file name
    //   .pipe(terser())
    //   .pipe(sourcemaps.write('.'))
    //   .pipe(rename({ suffix: '.min' }))
      .pipe(dest('./build/js'))
     
}

function imagenes() {
    return src('src/img/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3})))
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Completada'}));

}

function versionWebp() {
    return src('src/img/**/*')
        .pipe( webp() )
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Completada'}));
        
}
function watchFiles() {
    watch('src/scss/**/*.scss', css);
    watch('src/**/*.js', javascript);
    watch('src/img/**/*', imagenes);
    watch('src/img/**/*', versionWebp);
    
}

exports.default = parallel(css, javascript, imagenes, versionWebp, watchFiles);