# 目的

本项目旨在自己定义一个开发 react 项目的配置，包括:

-   prettier 格式化代码配置。首先需要安装 prettier 插件。

    1. 新建.vscode/setting.json 配置，设置`"prettier.requireConfig": true`来读取项目中.prettier 配置文件而不用受编辑器影响，保持团队内统一配置。
    2. 项目依赖中也要安装 prettier，在提交代码时格式化，防止未格式化的代码提交到仓库中造成冲突

-   eslint 检查代码语法错误。cra 初始化的项目默认安装了 eslint 及推荐的 eslint 的配置。默认的配置放在了 package.json 的 eslintConfig 字段中。结构为:(eslint 知识，extends 参数的值是配置，包含完整的 eslint 字段，plugins 是一些 rules 的集合，rules 只是 extends 中的一个字段)

    ```js
    // react项目package.json
    {
        "eslintConfig": {
            "extends": [
                "react-app",
                "react-app/jest"
            ]
        },
    }
    // eslint-config-react-app package.json
    {
        extends: [require.resolve('./base')],
        plugins: ['import', 'flowtype', 'jsx-a11y', 'react-hooks'],
        ...,
    }
    // ./base 文件,导出一个commonjs模块，包含完整的eslint规定的配置
    module.exports = {
        root: true,

        parser: 'babel-eslint',

        plugins: ['react'],
        ...
    }

    ```

    **项目中的安装的`eslint`依赖是在 webpack 打包过程中检查，为了在本地开发时也能检查出错误，需要下载 eslint vscode 插件**
    在默认配置上可下载其他使用广泛的 eslint config。如:

    1. `eslint-config-airbnb`
    2. `eslint-config-airbnb-typescript`
    3. `prettier` eslint 的 fix 选项和 prettier 都可能改动代码，这个配置是禁掉 eslint 中和 prettier 重复的 rule

-   typescript typescript 语法代码。**同 eslint 一样，项目中的安装的`typescript`依赖是在 webpack 打包过程中检查，为了在本地开发时也能检查出错误，需要下载 typescript vscode 插件**
-   babel
    1. 可以通过`presets`和`plugins`配置。`presets`可以看作是`plugins`的集合
    2. .babelrc 配置文件执行顺序
        1. 先执行完所有 Plugin，再执行 Preset。
        2. 多个 Plugin，按照声明次序顺序执行。
        3. 多个 Preset，按照声明次序逆序执行。
-   lint-staged 如果编辑器没有格式化好就需要在 git 提交前再次保证 lint lint-staged 会安装`husky`和`lint-staged`包。目的就是为本地 git 增加 hook，在 `pre-commit`hook 时，执行 lint。配置文件也遵守`cosmiconfig`约定
-   验证 git 提交信息。遵守一些共同的约定。使用`commitlint`和常用的规则集。遵守`cosmiconfig`建立 commit.config.js, 常用`@commitlint/config-angular`。在 git 的`commit-msg`hook 中执行`yarn commitlint --edit $1`对 commit 信息做校验
-   .editorconfig 这个插件是为了在不同编辑器下保持风格一致。需要不同编辑器下安装各自插件
-   stylelint 为了 lint 样式文件书写方式的插件。试验后发现该组件需要 vscode 也安装 stylelint 插件才可生效，还需要安装`stylelint-config-prettier`插件以禁用可能会和 prettier 冲突的配置。
