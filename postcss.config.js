/**
 * psotcss的配置文件
 * postcss事基于node.js运行的一个处理css的工具
 * 所以它的配置文件也是运行在node.js中
 */
module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },

    // 把px转换成rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      // 需要转换的css属性 ，*就是所有的属性都要转换
      propList: ['*']
    }
  }
}
