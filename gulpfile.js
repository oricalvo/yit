const gulp = require("gulp");
const build = require("./build/build");

gulp.task("dev", function() {
    return build.dev();
});
