const dotenv = require('dotenv');
const path = require('path');
const ejs = require('ejs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

function getVariables (env) {
    const vars = {}
    for (const file of [
        '.env',
        '.env.local',
        `.env.${env.mode}`,
        `.env.${env.mode}.local`
    ]) {
        Object.assign(vars, dotenv.config({ path: path.resolve(__dirname, file) }).parsed);
    }
    return vars
}

module.exports = env => ({

    target: ['web'],

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename ({ chunk }) {
                return chunk.name === 'old' ? 'styles.css' : 'new.styles.css'
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, 'src'),
                    from: '**/*.html',
                    to: path.resolve(__dirname, 'public'),
                    transform (input) {
                        return ejs.render(input.toString(), getVariables(env))
                    }
                }
            ]
        }),
    ],

    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },

    entry: {
        new: './src',
        old: './old'
    },

    output: {
        clean: true,
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: '/dist',
        filename ({ chunk }) {
            return chunk.name === 'old' ? 'scripts.js' : 'new.scripts.js'
        }
    },

    devServer: {
        static: 'public',
        compress: true,
        port: 8081,
        host: '0.0.0.0',
        devMiddleware: {
            writeToDisk: true
        }
    },

    devtool: 'source-map'

})
