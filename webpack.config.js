//MiniCssExtractPlugin の読み込み
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
      path: `${__dirname}/dist`,
      filename: "main.js",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devServer: {
        static: {
          directory: "./dist",
        },
    },
    mode: "development",
    module: {
      rules: [
        { 
            test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ 
        },
        {
            //拡張子 .scss、.sass、css を対象
            test: /\.(scss|sass|css)$/i, 
            // 使用するローダーの指定（後ろから順番に適用される）
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ], 
        },
      ],
    },

    plugins: [
        new MiniCssExtractPlugin({
          // 抽出する CSS のファイル名
          filename: 'style.css',
        }),
      ],
   };