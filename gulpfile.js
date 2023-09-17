/* Variables */

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

/* Funciones */

function css( done ) {
    //compilar sass
    // pasos: 1 - identificar archivo, 2 - Compilar, 3 - Guardar el .css

    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css'))

    done(); 
}

function dev() {
    watch( 'src/scss/app.scss', css );
}

exports.css = css ;
exports.dev = dev;