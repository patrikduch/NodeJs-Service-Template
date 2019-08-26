const merge = require('webpack-merge');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');

// Module export via CommonJS style
module.exports = env => {
	const isDev = env.NODE_ENV == 'production' ? true : false;
	console.log(isDev);
	const config = {
		target: 'node',

		mode: env.NODE_ENV,

		entry: {
			server: './src/App.ts'
		},

		output: {
			filename: '[name].js',
			publicPath: '/'
		},

		// Resolving modules fix
		resolve: {
			extensions: ['.ts', '.tsx', '.js']
		},

		// Tell webpack to run babel on every file it runs through
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: ['ts-loader', 'eslint-loader']
				}
			]
		},

		optimization: {
			// We no not want to minimize our code.
			minimize: false
		},

		plugins: [
			//new TerserWebpackPlugin(),

			new webpack.DefinePlugin({
				PRODUCTION: JSON.stringify(true),
				'process.env': {
					NODE_ENV: JSON.stringify(env.NODE_ENV)
				}
			})
		]
	};

	return config;
};
