// webpack必须采用commonjs写法
let path=require('path')//专门处理路径用的

//path.resolve('./dist')//已当前路径解析出一个绝对路径用的方法

module.exports={
  // 打包的入口文件，webpack会自动查找相关依赖关系
  entry:'./src/main.js',
  output:{
    filename:'bundle.js',//打包后的名字
    path:path.resolve('./dist') //输出的路径，必须是一个绝对路径
  },
  // 模块解析规则

  // --js匹配所有的js，，用babel-loader转义，排除掉node_modules
  module:{
    rules:[
      {test:/\.js$/,use:'babel-loader',
        exclude:/node_modules/}//匹配所有js文件，用babel-loader转义，排除掉node_modules中的文件
    ]
  }
}
