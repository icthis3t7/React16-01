var config = {
	entry: './AppSrc/main.js',

	output: {
		output: {
			filename: './wwwroot/index.js'

		},

		devServer: {
			inline: true,
			port: 8080

		},

		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader'

				}

			]

		},

		query: {
			presets: ['es2015', 'react']

		}

	}

};

module.exports = config;
