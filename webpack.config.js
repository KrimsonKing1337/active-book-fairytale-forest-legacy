import path from 'path';
import { fileURLToPath } from 'url';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import dotenv from 'dotenv';
import autoprefixer from 'autoprefixer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dotenvResult = dotenv.config({ path: path.resolve(__dirname, '.env') });
const activeBookCorePath = path.resolve(__dirname, 'node_modules/activeBook-core');

export default (env = {}, argv) => {
  const webpackMode = argv.mode;
  const { mobile, demo } = env;
  const isProd = webpackMode === 'production';

  const plugins = [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenvResult.parsed),
      'isDemoMode': JSON.stringify(demo),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.ejs',
      isMobile: !!mobile,
      isProd,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
        { from: path.resolve(activeBookCorePath, './assets'), to: 'assets' },
        { from: path.resolve(activeBookCorePath, './vendors'), to: 'vendors' },
      ],
    }),
  ];

  const rules = [
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.tsx?$/,
      use: ['babel-loader', {
        loader: 'ifdef-loader',
        options: {
          env: env,
        },
      }],
      exclude: /node_modules/,
    },
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false,
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
              auto: (resourcePath) => !resourcePath.includes('react-toastify'),
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [
                autoprefixer,
              ],
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            api: 'modern',
            sassOptions: {
              loadPaths: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'node_modules/activeBook-core'),
                path.resolve(__dirname, './'),
              ],
            },
          },
        },
      ],
    },
    {
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /sprite/,
          type: 'asset/resource',
        },
        {
          use: ['@svgr/webpack'],
        },
      ],
    },
    {
      test: /\.(jpeg|jpg|png|docx)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/,
      type: 'asset/resource',
    },
  ];

  if (mobile) {
    rules.push({
      test: /\.(tsx?|json)$/,
      loader: 'string-replace-loader',
      options: {
        search: '/assets',
        replace: 'file:///android_asset/www/assets',
        flags: 'g',
      },
    });
  }

  const buildDir = path.join(__dirname, (mobile ? 'cordova/www' : 'dist'));

  return {
    entry: ['core-js/stable', './src/index'],
    mode: webpackMode,
    devtool: !isProd ? 'eval-source-map' : false,
    devServer: {
      static: {
        directory: buildDir,
      },
      port: 3001, // todo
      historyApiFallback: true,
      hot: true,
      liveReload: false,
      // https: true, // доступ к камере работает только через https
    },
    output: {
      // пустой publicPath нужен для кордовы. она не может найти bundle.min.js, если его путь начинается с '/'
      publicPath: mobile ? '' : 'auto',
      path: buildDir,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    // target: !isProd ? 'web' : ['web', 'es5'],
    target: 'web',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss'],
      modules: [
        path.resolve(__dirname, './'),
        path.resolve(__dirname, './src'),
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, './assets'),
      ],
      alias: {
        'styles': path.resolve(activeBookCorePath, './styles'),
      },
      fallback: {
        crypto: false,
      },
    },
    module: {
      rules: rules,
    },
    plugins: plugins,
    optimization: {
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
  };
};
