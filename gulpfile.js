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
        .pipe( sass({outputStyle: 'compressed'}) )
        .pipe( postcss([autoprefixer()]) )
        .pipe( dest('build/css'))

    done(); 
}

function imagenes ( done ) {
    src('src/img/**/*')
        .pipe( dest('build/img') );

        done();
}

function dev() {
    watch( 'src/scss/**/*.scss', css);
    watch( 'src/img/**/*', imagenes);
}


exports.css = css ;
exports.imagenes = imagenes;
exports.dev = dev;
exports.default = series( imagenes, css, dev );


// series - se inicia una tarea, y hasta que finaliza inicia la siguiente
// parallel - todas inician al mismo tiempo.     