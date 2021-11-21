// Object.defineProperty(exports, '__esModule', { value: true });
// const path = require('path');

// const eslintFolder = path.join(path.dirname(require.resolve('eslint')), '..');
// const moduleResolverPath = path.join(eslintFolder, 'lib/shared/relative-module-resolver');
// // eslint-disable-next-line import/no-dynamic-require
// const ModuleResolver = require(moduleResolverPath);
// // eslint-disable-next-line func-names
// ModuleResolver.resolve = function (moduleName) {
//     return require.resolve(moduleName);
// };

module.exports = {
    extends: ['airbnb', 'airbnb-typescript', 'prettier'].map((key) => {
        return require.resolve(`eslint-config-${key}`);
    }),
    plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'unicorn', 'react-hooks'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true,
    },
    rules: {
        'react/jsx-wrap-multilines': 0,
        'react/prop-types': 0,
        'react/forbid-prop-types': 0,
        'react/sort-comp': 1,
        'react/jsx-one-expression-per-line': 0,
        'generator-star-spacing': 0,
        'function-paren-newline': 0,
        'import/no-unresolved': 0,
        'no-console': 'off',
        // 暂时关闭掉这2个规则
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        'import/order': 'warn',
        'react/jsx-props-no-spreading': 0,
        'react/state-in-constructor': 0,
        'react/static-property-placement': 0,
        'import/no-extraneous-dependencies': [
            2,
            {
                optionalDependencies: true,
                devDependencies: [
                    '**/tests/**.{ts,js,jsx,tsx}',
                    '**/_test_/**.{ts,js,jsx,tsx}',
                    '/mock/**/**.{ts,js,jsx,tsx}',
                    '**/**.test.{ts,js,jsx,tsx}',
                    '**/_mock.{ts,js,jsx,tsx}',
                    '**/example/**.{ts,js,jsx,tsx}',
                    '**/examples/**.{ts,js,jsx,tsx}',
                ],
            },
        ],
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'linebreak-style': 0,
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': [0, 'camel-case'],
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        'react/jsx-filename-extension': 'off',
        'sort-imports': 0,
        // Use function hoisting to improve code readability
        'no-use-before-define': 0,
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/explicit-function-return-type': ['off', { allowTypedFunctionExpressions: true }],
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-var-requires': 0,
        // Common abbreviations are known and readable
        'unicorn/prevent-abbreviations': 'off',
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'import/no-cycle': 0,
        'react/no-array-index-key': 'warn',
        // https://github.com/facebook/react/issues/15204
        // issue  https://github.com/facebook/react/issues/14920
        // hooks就要检查,没有必要的依赖应该被干掉
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        // Conflict with prettier
        'arrow-body-style': 0,
        'arrow-parens': 0,
        'object-curly-newline': 0,
        'implicit-arrow-linebreak': 0,
        'operator-linebreak': 0,
        'eslint-comments/no-unlimited-disable': 0,
        'no-param-reassign': 2,
        'space-before-function-paren': 0,
        'import/extensions': 0,
        // '@typescript-eslint/no-unused-expressions': 0,
        // 'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        // support import modules from TypeScript files in JavaScript files
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
        polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
    },
    ignorePatterns: ['**/scripts/*.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
};
