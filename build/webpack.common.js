const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => ({
  entry: {
    app: './src/index.tsx',
    vendor: [
      "react",
      "react-dom",
      "react-redux",
      "react-router-dom",
      "react-router-config",
      "@better-scroll/core"
    ]
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      "@": path.join(__dirname, "../src"),
    }
  },
  module: {
    rules: [{
      test: /\.(html)$/,
      loader: "html-loader"
    }, {
      test: [/\.tsx$/, /\.ts$/],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    }, {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        }
      }]
    }, {
      test: /\.(eot|woff2?|ttf|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          name: '[name]-[hash:5].min.[ext]',
          limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
          publicPath: 'fonts/',
          outputPath: 'fonts/'
        }
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader','css-loader']
    }, {
      test: /\.(scss|sass)$/,
      use: [
        env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  }
})