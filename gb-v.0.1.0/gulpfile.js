"use strict"

//const gulp = require("gulp"),
//    stylus = require("gulp-stylus"),
//    sass = require("gulp-sass"),
 //   pug = require("gulp-pug"),
 //   debug = require("gulp-debug"),
 //   sourcemaps = require("gulp-sourcemaps"),
 //   del = require("del"),
 //   browserSync = require("browser-sync").create();

global.$ = {
    path: {
        task: require("./gulp/paths/tasks.js")
    },
    gulp: require("gulp"),
    pug: require("gulp-pug"),
    del: require("del"),
    gp: require("gulp-load-plugins")(),
    sourcemaps: require("gulp-sourcemaps"),
    browserSync: require("browser-sync").create()
};

$.path.task.forEach((taskPath) => {
    require(taskPath) ();
});

$.gulp.task("default", $.gulp.series(
    "clean", 
    $.gulp.parallel(
        "sass",
        "pug"
    ),
    $.gulp.parallel(
        "serve",
        "watch"
    )
));

//gulp.task("styles", () => {
//    return //gulp.src("frondend/assets/**/*.styl")
//        .pipe(sourcemaps.init())
//        .pipe(stylus())
//        .pipe(sourcemaps.write(""))
//        .pipe(gulp.dest("public"));
//});

//gulp.task("sass", () => {
//    return //gulp.src("frondend/assets/**/*.scss")
//        .pipe(sourcemaps.init())
 //       .pipe(sass())
 //       .pipe(sourcemaps.write(""))
 //       .pipe(gulp.dest("public"));

//});

//gulp.task("pug", () => {
 //   return gulp.src("frondend/assets/**/*.pug")
 //       .pipe(pug())
 //       .pipe(gulp.dest("public"));
//});

//gulp.task("serve", () => {
//    browserSync.init({
//        open: false,
 //       server: "./public"
 //   });
 //   browserSync.watch("build", browserSync.reload);
//});


//gulp.task("clean", () => {
//    return del(["public"]);
//});

//gulp.task("build", gulp.series("clean", //gulp.parallel("styles", "sass", "pug")));

//gulp.task("watch", () => {
 //   gulp.watch("frondend/assets/**/*.styl//", gulp.series("styles"));
   // gulp.watch("frondend/assets/**/*.scss", gulp.series("sass"));
 //   gulp.watch("frondend/assets/**/*.pug", gulp.series("pug"));
//});

//gulp.task("def", gulp.series("build", gulp.parallel("watch", "serve")));


//gulp.task("default", () => {
//   return gulp.src("source/**/*.*")
//         .on("data", (file) => {
//       console.log(file);
//    })
//           .pipe(gulp.dest("dest"));
//})

/*gulp.task("hello", (callback) => {
    console.log("Привет!!!");
    callback();
});

gulp.task("example:promise", () => {
    return new Promise((resolve, reject) => {
        //..
        resolve("result");
    });
});

gulp.task("example:stream", () => {
    return require("fs").createReadStream(_filename);
});

gulp.task("example:process", () => {
    return require("child_process").spawn("ls," ["node_modules"], {stdio: "inherit"});
});

gulp.task("example", gulp.series("hello", "example:promise", "example:stream", "example:stream")); */
