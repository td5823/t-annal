module.exports = {
  env: {
    browser: true, // 表示这是一个浏览器环境
    node: true, // 表示这是一个 Node.js 环境
  },
  parserOptions: {
    ecmaVersion: 2021, // 使用 ECMAScript 2021 版本的语法
    sourceType: "module", // 使用 ES6 模块语法
    ecmaFeatures: {
      jsx: true, // 允许解析 JSX 语法
    },
  },
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  // extends: ["eslint:recommended"], // 这一行被注释掉了，意味着没有继承特定的扩展配置
  plugins: ["@typescript-eslint", "react", "react-hooks", "import"],
  rules: {
    "no-debugger": "warn", // 有debugger警告提示
    "no-console": "warn", // 有console警告提示
    "react/jsx-uses-react": "error", // 强制在 JSX 使用 React
    "react/jsx-uses-vars": "error", // 检测未使用的 JSX 变量
    // "no-undef": "error", // 对未定义（未知变量）但是使用了的做规则
    "no-unused-vars": [
      // 对定义了但是未使用的变量或常量做规则
      "warn",
      {
        vars: "all", // 对所有变量生效
        args: "after-used", // 检测函数参数是否被使用
        ignoreRestSiblings: true, // 忽略剩余参数和解构赋值中的未使用变量
      },
    ],
    "react/react-in-jsx-scope": "error", // 强制在 JSX 中使用 React
    "react-hooks/rules-of-hooks": "error", // 强制遵循 React Hooks 使用规则
    "react-hooks/exhaustive-deps": "warn", // 检测依赖项数组是否完整
    "import/prefer-default-export": "off", // 用于控制在模块中是使用默认导出（default export）而不是命名导出（named export）
    "import/first": "error", // 规则要求将所有的导入语句放在文件的顶部
    "import/no-anonymous-default-export": "error", // error 不允许默认匿名导出
    // "import/no-extraneous-dependencies": "error", // 引入模块必须是package.json中的模块
    // "import/no-unresolved": ["error", { "commonjs": true }]
    // "import/no-named-as-default": "off", // 设置为 "off，允许将命名导出作为默认导出来导入
    // "import/no-unresolved": ["error", { "commonjs": true }]
    // 'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }]
    // 上面这行被注释掉了，如果启用会检查未解析的导入模块
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // "no-unused-vars": "off", // 关闭禁止未使用的变量规则
        // "no-undef": "off", // 关闭禁止使用未定义的变量规则
        "@typescript-eslint/ban-ts-comment": "warn", // @ ts-ignore 报警告
        "@typescript-eslint/no-unused-vars": "off",
        // "@typescript-eslint/explicit-module-boundary-types": "error", // 于在函数和方法的返回类型未明确指定的情况下发出错误警告
        "@typescript-eslint/no-explicit-any": "off", // 示 ESLint 在检测到代码中使用了显式的 any 类型时，会发出警告
        "@typescript-eslint/no-inferrable-types": "off", // 当赋值操作中的变量类型可以被推断出时，禁止显式指定类型
        "@typescript-eslint/no-var-requires": "off", // @typescript-eslint/no-var-requires 是 TypeScript ESLint 插件提供的一条规则，用于在 TypeScript 代码中禁止使用 require 语句来导入模块，而鼓励使用 ES6 模块的 import 语句。
        // ...其他规则...
      },
    },
  ],
};
