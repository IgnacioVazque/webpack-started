const HtmlWebpack          = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin           = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules:[
            // Reglas para el html
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            // reglas para el css
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // Reglas img
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'My Webpack app',
            template: './src/index.html',
        }),

        new MiniCssExtractPlugin({
            filename: 'nuevo-estilo.css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'},
                // {from: 'other', to: 'public'},
            ]
        })
        
    ]
}