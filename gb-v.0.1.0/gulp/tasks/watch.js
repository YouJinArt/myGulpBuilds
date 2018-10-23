"use strict";

module.exports = () => {
    $.gulp.task("watch", () => {
 $.gulp.watch("frondend/assets/**/*.scss", $.gulp.series("sass"));
    $.gulp.watch("frondend/assets/**/*.pug", $.gulp.series("pug"));
});

}