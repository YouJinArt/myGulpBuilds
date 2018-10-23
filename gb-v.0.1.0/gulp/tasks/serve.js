 "use strict";

module.exports = () => {
    $.gulp.task("serve", () => {
        $.browserSync.init({
            open: false,
            server: "./public"
        });
        $.browserSync.watch("build", $.browserSync.reload);
    });
};
