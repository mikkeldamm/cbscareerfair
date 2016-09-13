const webpack = require('webpack');
const helpers = require('./helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const METADATA = {
    isDevServer: helpers.isWebpackDevServer()
};

module.exports = function (options) {
    isProd = options.env === 'production';
    return {
        metadata: METADATA,
        entry: {
            'polyfills': './src/polyfills.browser.ts',
            'vendor': './src/vendor.browser.ts',
            'main': './src/main.browser.ts'
        },
        resolve: {
            extensions: ['', '.ts', '.js', '.json'],
            root: helpers.root('src'),
            modulesDirectories: ['node_modules'],
        },
        module: {
            preLoaders: [
                {
                    test: /\.ts$/,
                    loader: 'string-replace-loader',
                    query: {
                        search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
                        replace: '$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)',
                        flags: 'g'
                    },
                    include: [helpers.root('src')]
                }
            ],
            loaders: [
                {
                    test: /\.ts$/,
                    loaders: [
                        'awesome-typescript-loader',
                        'angular2-template-loader'
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.scss$/,
                    loaders: ['to-string-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.css$/,
                    loaders: ['to-string-loader', 'css-loader']
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader',
                    exclude: [helpers.root('src/index.html')]
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    loader: 'file'
                }
            ],
            postLoaders: [
                {
                    test: /\.js$/,
                    loader: 'string-replace-loader',
                    query: {
                        search: 'var sourceMappingUrl = extractSourceMappingUrl\\(cssText\\);',
                        replace: 'var sourceMappingUrl = "";',
                        flags: 'g'
                    }
                }
            ]
        },
        plugins: [
            new ForkCheckerPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['polyfills', 'vendor'].reverse()
            }),
            new CopyWebpackPlugin([{
                from: 'src/assets',
                to: 'assets'
            }]),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                chunksSortMode: 'dependency'
            })
        ],
        node: {
            global: 'window',
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    };
}