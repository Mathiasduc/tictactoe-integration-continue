module.exports = {
	entry: './src/js/app.js',
	output:{
		path: './bin',
		filename: 'app.bundle.js'
	},
	module:{
		loader:[
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};