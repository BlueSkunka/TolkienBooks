module.exports = {
    parser: "postcss-scss",
    plugins: {
        "@csstools/postcss-sass": "./src/css/style.scss",
        "postcss-import": {},
        "tailwindcss/nesting": "postcss-nesting",
        tailwindcss: {},
        autoprefixer: {},
    },
};