// webpack.base.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const applicationAlias = require("./paths");

module.exports = {
  // ...
  entry: path.join(__dirname, "../src/index.tsx"), // 入口文件
  // 打包文件出口
  output: {
    filename: "static/js/[name].js", // 每个输出js的名称
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  resolve: {
    alias: {
      ...applicationAlias,
    },
    extensions: [".jsx", ".js", ".tsx", ".ts"],
    modules: ["node_modules", "src"],
  },
  module: {
    // 将缺失的导出提示成错误而不是警告
    strictExportPresence: true,
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/, // 匹配.ts, tsx文件
        use: [
          "thread-loader",
          {
            loader: "babel-loader",
            options: {
              // 预设执行顺序由右往左,所以先处理ts,再处理jsx
              presets: ["@babel/preset-react", "@babel/preset-typescript"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  "root-entry-name": "default",
                },
              },
            },
          },
        ],
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/images/[name][ext]", // 文件输出目录和命名
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
    new ForkTsCheckerWebpackPlugin({
      // 添加 ForkTsCheckerWebpackPlugin
      async: true, // 异步模式
      typescript: {
        // TypeScript 相关配置
        typescriptPath: require.resolve("typescript"), // TypeScript 路径
        configOverwrite: {
          compilerOptions: {
            sourceMap: true, // 是否生成 source map
            // 其他 TypeScript 编译选项...
          },
        },
        diagnosticOptions: {
          syntactic: true, // 显示语法错误
        },
        mode: "write-references", // 模式设置为 'write-references'
      },
      issue: {
        include: [
          { file: "src/**/*.{ts,tsx}" }, // 包含所有包含 .ts 或 .tsx 扩展名的文件，路径包含 /src/ 目录
        ],
        exclude: [
          { file: "/src/**/__tests__/**" }, // 排除所有测试文件
          { file: "/src/**/?(*.){spec|test}.*" }, // 排除所有带有 .spec.ts 或 .test.ts 扩展名的文件
        ],
      },
      // logger: {
      //   infrastructure: "console",
      //   issues: 'console',
      // },
    }),
  ],
};
