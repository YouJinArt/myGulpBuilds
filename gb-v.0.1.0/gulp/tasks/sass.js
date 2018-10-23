"use strict";

module.exports = () => {
    $.gulp.task("sass", () => {
        return $.gulp.src("frondend/assets/**/*.scss")
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on("error", $.gp.notify.onError({
                title: "Style"
            }))
            .pipe($.gp.autoprefixer({
                browsers: [
            "last 3 version",
            "> 1%",
            "ie 8",
            "ie 9",
            "Opera 12.1"
        ]
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest("public"))
    });
}
