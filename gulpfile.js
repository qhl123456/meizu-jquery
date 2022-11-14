var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
gulp.task("uglify", (done) => {
  console.log("这是JS的压缩");
  gulp.src("js/*.js").pipe(uglify()).pipe(gulp.dest("./js"));
  done();
});
// 4.4 压缩css
gulp.task("miniCss", (done) => {
  console.log("压缩css");
  gulp.src("css/*.css").pipe(minifyCss()).pipe(gulp.dest("./css"));
  done();
});
