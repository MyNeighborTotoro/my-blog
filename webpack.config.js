const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: false,
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src'),
				use: [
					"babel-loader",
					"eslint-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'my blog'
		}),
		new CleanWebpackPlugin(['dist']),
	]
}