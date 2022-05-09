const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',//entry에 들어간 파일에 바벨로더 적용
      options: { //바벨로더에 대한 옵션
        presets:[
            ['@babel/preset-env',{
            targets:{
                browsers:['> 5% in KR'], //browserslist(ie에서 구동되게 뭐그런거)
            },
            debug: true,
        }],
        '@babel/preset-react',
      ],
        plugins: [],
        },
    }],
},
  plugins:[
      new webpack.LoaderOptionsPlugin({debug:true}),
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};