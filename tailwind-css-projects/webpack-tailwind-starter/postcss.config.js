const { plugin } = require('postcss');
const tailwindcss = require('tailwindcss'); 

module.exports = {
    plugins: [
        'postcss-preset-env',
        tailwindcss
    ]
}