"use strict";

module.exports = () => {
    $.gulp.task("pug", () => {
        return $.gulp.src("frondend/assets/**/*.pug")
            .pipe($.gp.pug({
                pretty: true
            }))
            .on("error", $.gp.notify.onError(
                (error) => {
                    return {
                        title: "Pug",
                        message: error.message
                    }
                }))
            .pipe($.gulp.dest("public"));
    });
};
