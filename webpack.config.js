"use strict";

let webpack = require("webpack");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HTMLPlugin = require('html-webpack-plugin')

//let LessExtractText = new ExtractTextPlugin("./css/[name].css");

module.exports = {
	context: __dirname,
	entry: {
		"index": [
			"./src/index.js",
			"./src/less/index.less"
		],
		"common":[
			"./src/js/common.js",
			"./src/less/common.less"
		]
	},
	output: {
		pathinfo: true,
		path: `${__dirname}/built`,
		filename: "./js/[name].js"
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	devtool: "source-map",
	module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules|plugins/, loader: "babel-loader" },
            { test: /\.js$/, enforce: "pre",exclude: /node_modules|plugins/, loader: "eslint-loader" },
            //{ test: /\.js$/, exclude: /node_modules/, loader: "eslint" },
            //{ test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" },
            //{ test: require.resolve("ip"), loader: "expose?_IP" },
            //{ test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?name=[path][name].[ext]'},
            { test: /\.gif|png|jpg|jpeg|svg|ttf|woff2?|eot/,exclude: /src\/flow|thegraph/, loader: "file-loader",
                options: {
                    name: "/img/[name].[hash].[ext]"
                }
            },
            { test: /\.less$/,exclude: /src\/flow|thegraph/, loader: ExtractTextPlugin.extract({fallback:"style-loader", use:["css-loader","less-loader"]}) }
        ],
        
    },
    // eslint: {
    //     //configFile: './.eslintrc.js', // 指定eslint的配置文件在哪里
    //     failOnWarning: true, // eslint报warning了就终止webpack编译
    //     failOnError: true, // eslint报error了就终止webpack编译
    //     cache: false // 开启eslint的cache，cache存在node_modules/.cache目录里
    // },
	plugins: [
		new ExtractTextPlugin("./css/[name].css"),
		new HTMLPlugin({
			template: './src/index.html'
		}),
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		NODE_ENV: '"production"'
		// 	}
		// })
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	}
		// })
	],
	devServer: {
		port: 23333,
		host: "0.0.0.0",
        disableHostCheck: true,
		contentBase: `${__dirname}/src`
	}
};