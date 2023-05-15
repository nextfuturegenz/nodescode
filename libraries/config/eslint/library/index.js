module.exports = {
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    ignorePatterns: ['**/test/**'],
    parser: 'babel-eslint',
    globals: {
        window: 'writable',
        logger: 'readonly',
        expect: 'readonly',
        test: 'readonly',
        jest: 'readonly',
        it: 'readonly',
        localStorage: true
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'prefer-promise-reject-errors': 0,
        'arrow-parens': 0,
        'no-bitwise': 0,
        'object-curly-newline': 0,
        'import/prefer-default-export': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ]
    }
}