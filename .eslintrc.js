module.exports = {
  env: {
    browser: true, // 表示这是一个浏览器环境
    node: true,    // 表示这是一个 Node.js 环境
  },
  parserOptions: {
    ecmaVersion: 2021, // 使用 ECMAScript 2021 版本的语法
    sourceType: "module", // 使用 ES6 模块语法
    ecmaFeatures: {
      jsx: true, // 允许解析 JSX 语法
    },
  },
  // extends: ["eslint:recommended"], // 这一行被注释掉了，意味着没有继承特定的扩展配置
  plugins: ["react", "react-hooks", "import"], // 使用了这些插件
  rules: {
    "react/jsx-uses-react": "error", // 强制在 JSX 使用 React
    "react/jsx-uses-vars": "error", // 检测未使用的 JSX 变量
    "no-unused-vars": [
      "error",
      {
        vars: "all",               // 对所有变量生效
        args: "after-used",       // 检测函数参数是否被使用
        ignoreRestSiblings: true, // 忽略剩余参数和解构赋值中的未使用变量
      },
    ],
    "react/react-in-jsx-scope": "error", // 强制在 JSX 中使用 React
    "react-hooks/rules-of-hooks": "error",     // 强制遵循 React Hooks 使用规则
    "react-hooks/exhaustive-deps": "warn",     // 检测依赖项数组是否完整
    // 'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }]
    // 上面这行被注释掉了，如果启用会检查未解析的导入模块
  },
};

