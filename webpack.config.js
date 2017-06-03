const path = require('path');

var config = {
   entry: './src/main.js',

   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
   },

   devServer: {
      contentBase: "./src",
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         },
         {
           test: /\.scss$/,
           loaders: ["style-loader", "css-loader", "sass-loader"]
         }
      ]
   }
}

module.exports = config;
