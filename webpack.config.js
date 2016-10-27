
module.exports = {
	entry: {
		app: ["./src/entry.js"]
    },
	output: {
        filename: "./output/app.js"
	},
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
	externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        'toastr': "toastr", 
        //'react-redux': "reactRedux",
        //'redux-form': "reduxForm",
        'lodash': "_"
    },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					  presets: ['es2015', 'react']
				}
			}
		]
	}
};
