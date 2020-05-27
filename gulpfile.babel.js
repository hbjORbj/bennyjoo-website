import gulp from "gulp";
import del from "del";
import ghPages from "gulp-gh-pages";
import image from "gulp-image";
import babelify from "babelify";
import bro from "gulp-bro";

const routes = {
  html: {
    src: "src/*.html",
    dest: "dist",
  },
  css: {
    src: "src/css/style.css",
    dest: "dist/css",
  },
  images: {
    src: "src/img/*",
    dest: "dist/img",
  },
  js: {
    src: "src/js/*.js",
    dest: "dist/js",
  },
};

const html = () => gulp.src(routes.html.src).pipe(gulp.dest(routes.html.dest));
const css = () => gulp.src(routes.css.src).pipe(gulp.dest(routes.css.dest));

const images = () =>
  gulp.src(routes.images.src).pipe(image()).pipe(gulp.dest(routes.images.dest));

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(
      bro({
        transform: [babelify.configure({ presets: ["@babel/preset-env"] })],
      })
    )
    .pipe(gulp.dest(routes.js.dest));

const ghDeploy = () => gulp.src("dist/**/*").pipe(ghPages());

const clean = () => del(["dist", ".publish"]);
const prepare = gulp.series([clean]);
const assets = gulp.series([html, css, images, js]);

export const build = gulp.series([prepare, assets]);
export const deploy = gulp.series([ghDeploy, clean]);
