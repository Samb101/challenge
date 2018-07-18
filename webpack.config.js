const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractPlugin = new ExtractTextPlugin({
    filename: "app.css"
});

module.exports = {
    devtool: "eval",
    entry: ["./src/index"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/static/"
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), extractPlugin],
    resolve: {
        extensions: [".js", ".jsx", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ["babel-loader"],
                include: path.join(__dirname, "src")
            },
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, "src", "assets", "scss")],
                use: extractPlugin.extract({
                    use: ["css-loader", "sass-loader"],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader?limit=100000"
            }
        ]
    }
};
