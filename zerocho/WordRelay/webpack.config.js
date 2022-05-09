const path=require('path')
const RefreshWebpackPlugin=require('@pmmmh/react-refresh-webapck-plugin')

module.exports = {
    name: 'word-relay-dev',
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    entry: {
      app: './client',
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                  browsers:['> 1% KR',]
              },
              debug: true,
            }],
            '@babel/preset-react',
          ],
          plugins: [
              '@bable/plugin-proposal-calss-properties',
              'react-refresh/babel'
            ],
        },
      }],
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/dist',
    },
    devServer: {
        devMiddleware: { publicPath: '/dist' },//webapck으로 생길 파일의 경로
        static: { directory: path.resolve(__dirname) },//실제 지금 파일의 경로
        hot: true
    }
  };