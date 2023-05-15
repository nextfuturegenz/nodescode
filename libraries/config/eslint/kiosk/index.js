module.exports = {
    extends: ['react-app', 'plugin:prettier/recommended'],
    settings: {
        react: {
            version: 'latest',
        },
    },
    rules: {
        'max-lines': ['error', 300],
        'jsx-a11y/anchor-is-valid': 0,
    }
}