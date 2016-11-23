import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',//入口文件
  format: 'cjs',//模块加载形式
  plugins: [ babel() ],
  dest: 'build/bundle.js'//打包生成文件
};
