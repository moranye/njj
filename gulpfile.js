//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
cssmin = require('gulp-minify-css'),
jsmin = require('gulp-uglify'),
clean = require('gulp-clean'),
webpack = require('webpack'),
webpack_config = require('./webpack.config.js');


gulp.task("clean", function(){
    gulp.src('./bundle')
    .pipe(clean());
})

//定义一个testLess任务
gulp.task('cssmin', function () {
    gulp.src('dev/css/**/*') 
    .pipe(cssmin({
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
        })) 
    .pipe(gulp.dest('bundle/css')); 
});

gulp.task('jsmin', function () {
    gulp.src('dev/dist/js/*.js')
    .pipe(jsmin({
            //mangle: true,//类型：Boolean 默认：true 是否修改变量名
            // mangle: {except: ['require' ,'exports' ,'module' ,'$']}//排除混淆关键字
        }))
    .pipe(gulp.dest('bundle/js'));
});

gulp.task("webpack", ['clean'], function(callback) {
    webpack(webpack_config, function(err, stats) {
        callback();
    });
});

gulp.task("move_folder", function(){
    gulp.src('./dev/images/*.*')
        .pipe(gulp.dest('./bundle/images')); 
});

gulp.task('default',['webpack'],function(){
	gulp.run(['jsmin','cssmin','move_folder'], function(){
		console.info('发布完成！');
	});
}); 