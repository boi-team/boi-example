// 使用插件
boi.use('boi-plugin-loader-vue');
boi.use('boi-plugin-loader-svgsprite',{
    name: 'svg/svg-sprite.svg',
    inject: false,
    targets: ['index.html']
});
// 配置
boi.spec('basic', {
    appName: 'suyun',
    // 本地编译目录
    localPath: {
        src: './src/',
        dest: './dest/',
        thirdparty: './libs/'
    },
    // cdn url
    cdn: {
        server: 'static.daojia.com',
        path: '/suyun/'
    }
});

// 同名配置覆盖父级
boi.spec('js', {
  extType: 'js',
  srcType: ['es2015'],
  srcDir: 'js',
  destDir: 'js',
  // webpackConfig: {
  //   loader: {
  //     test: /\.js$/,
  //     loader: 'babel',
  //     query: {
  //       presets: [
  //         'babel-preset-stage-0',
  //         'babel-preset-es2015'
  //       ],
  //       plugins: ["transform-object-assign"]
  //     }
  //   }
  // }
});

boi.spec('html', {
    extType: 'html',
    srcDir: 'views',
});

boi.spec('image', {
    extType: ['png', 'jpg'],
    destDir: 'image',
    // cdn: 'dj.58cdn.com.cn/fe/h5/djh5/css/images/',
});
// boi.serve({
//     port: '8888'
// })
