const path = require(`path`);
const publicPath = path.join(__dirname, `public`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: publicPath,
  },
  devServer: {
    contentBase: publicPath,
		watchContentBase: true,
  },
  devtool: `source-map`,
}