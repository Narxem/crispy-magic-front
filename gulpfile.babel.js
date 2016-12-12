import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  clientSrc: 'src/client/**/*.js?(x)',
  clientEntryPoint: 'src/client/app.jsx',
  clientBundle: 'dist/client-bundle.js?(.map)',
  webpackFile: 'webpack.config.babel.js',
  gulpFile: 'gulpfile.js',
  libDir: 'lib',
  distDir: 'dist',
};

// Task to clean up all generated files in libDir
gulp.task('clean', () => del([
  paths.libDir,
  paths.clientBundle,
]));

// Building task taking care of transpile the sources
gulp.task('build', ['clean'], () =>
  gulp.src(paths.clientSrc)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
);

// Launching task
gulp.task('main', ['build'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir))
);

// Watching change in the repository
gulp.task('watch', () =>
  gulp.watch(paths.clientSrc, ['main'])
);

gulp.task('default', ['watch', 'main']);
