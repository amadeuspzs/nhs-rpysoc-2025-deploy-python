const globals = require('globals');

module.exports = [
    {
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                module: false,
                console: false,
                unescape: false,
                define: false,
                exports: false
            }
        },
        rules: {
            'curly': 0,
            'eqeqeq': 2,
            'wrap-iife': [2, 'any'],
            'no-use-before-define': [2, { functions: false }],
            'new-cap': 2,
            'no-caller': 2,
            'dot-notation': 0,
            'no-eq-null': 2,
            'no-unused-expressions': 0,
            'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
        }
    }
];
