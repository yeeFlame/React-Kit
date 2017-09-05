import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ROOT_PATH = path.resolve(__dirname, '..');
const APP_PATH = path.resolve(ROOT_PATH, 'src');

export default {
  entry: [
    'webpack-hot-middleware/client',
    APP_PATH
  ],
  output: {
    path: path.join(ROOT_PATH, '/build/'),
    filename: 'build/[name].[hash:4].js',
    chunkFilename: 'build/chunk.[id].[hash:4].js',
    publicPath: ''
  },
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      // use loaders when it is array. Or it comes error maybe.
      loaders: ['react-hot-loader', 'babel-loader']
    }, {
      test: /\.(jpe?g|gif|png|ico|svg)$/,
      loader: 'url-loader?limit=8192&name=build/[name].[hash:4].[ext]'
    }, {
      test: /\.(woff2?|otf|eot|ttf)$/i,
      loader: 'url-loader?name=fonts/[name].[hash:4].[ext]'
    }, 
    // { webpack 2.X 后自动尝试通过json-loader加载JSON文件
    //   test: /\.json$/,
    //   loader: 'json',
    // }
  ],
    //preLoaders: [{
    //  test: /\.(js|jsx)$/,
    //  loader: 'eslint',
    //  exclude: /node_modules/
    //}]
  },
  resolve: {
    // modulesDirectories: [
    //   'src',
    //   'node_modules',
    //   'src/assets'
    // ],
    // extensions: ['', '.js', '.png']
    modules: [
      path.join(ROOT_PATH, "src"),
      "node_modules"
    ],
  },
  //postcss: function() {
  //  return [
  //    require('autoprefixer'),
  //    require('precss')
  //  ]
  //},
  plugins: [
    // webpack hot middleware configuration.
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(APP_PATH, 'index.html')
    }),
    new ExtractTextPlugin({
      filename: 'build/app.[hash:4].css',
      disable: false,
      allChunks: true,
    }),

    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        debug: true,
        ROOT_PATH: path.resolve(__dirname, '..'),
        APP_PATH: path.resolve(ROOT_PATH, 'src'),
        eslint: {configFile: `${ROOT_PATH}/.eslintrc`}
      }
    }),
  ],
  devtool: 'source-map',
  // eslint: {
  //   configFile: `${ROOT_PATH}/.eslintrc`
  // },
  // ROOT_PATH,
  // APP_PATH,
}