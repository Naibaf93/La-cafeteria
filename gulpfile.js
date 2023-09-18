/* Variables */

const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

/* Funciones */

function css( done ) {
    //compilar sass
    // pasos: 1 - identificar archivo, 2 - Compilar, 3 - Guardar el .css

    src('src/scss/app.scss')
        .pipe( sass({outputStyle: 'expanded'}) )
        .pipe( postcss([autoprefixer()]) )
        .pipe( dest('build/css'))

    done(); 
}

function dev() {
    watch( 'src/scss/**/*.scss', css);
}


exports.css = css ;
exports.dev = dev;
exports.default = series( css, dev );

// series - se inicia una tarea, y hasta que finaliza inicia la siguiente
// parallel - todas inician al mismo tiempo.     