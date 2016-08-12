module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{ 
      test: /\.css$/,
      loader: 'style!css' // note style is before css
    }]
  }
}