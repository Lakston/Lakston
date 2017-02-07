var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  // generate sourcemaps in production.
  devtool: 'source-map',
  // Generating 2 chunks, one for the App code and one for Vendor code.
  entry: {
    app: path.join(__dirname, 'src/App.js'),
    vendor: ["react", "react-dom"],
  },
  output: {
    path: "./build/",
    // Generated JS file names (with nested folders).
    // One main bundle, and one file per asynchronous chunk.
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: __dirname + "/src/",
        exclude: /node_modules/,
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: __dirname + "/src/",
        loader: 'babel'
      },
      // "postcss" loader applies autoprefixer to the CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // If code splitting, any async bundles will still use the "style" loader inside
      // the async code so CSS from them won't be in the main CSS file.
      {
        test: /\.sass$/,
        // "?-autoprefixer" disables autoprefixer in css-loader itself:
        //"css" loader only enables autoprefixer-powered
        // removal of unnecessary prefixes when Uglify plugin is enabled.
        loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!sass')
      },
      // "file" loader makes sure those assets end up in the `build` folder.
      {
        test: /\.(jpg|png|svg)(\?.*)?$/,
        loader: 'url-loader?limit=20000&name=static/media/[hash:8].[ext]'
      },
      // "html" loader is used to process template page (index.html) to resolve
      // resources linked with <link href="./relative/path"> HTML tags.
      {
        test: /\.html$/,
        loader: 'html',
        query: {
          attrs: ['link:href'],
        }
      }
    ]
  },
  // Autoprefixer settings
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ]
      }),
    ];
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    // Define the node environment
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    }),
    // Generate the vendor chunk
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./static/js/vendor.bundle.js"),
    // Ensure the builds are consistent if source hasn't changed:
    new webpack.optimize.OccurrenceOrderPlugin(),
    // Try to dedupe duplicated modules, if any:
    new webpack.optimize.DedupePlugin(),
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    // Extract CSS into a separate file
    new ExtractTextPlugin('static/css/[name].[contenthash:8].css', {allChunks: true})
  ]
};
