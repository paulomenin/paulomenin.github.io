module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}"
    ],
    darkMode: false,
    theme: {
        extend: {
            screens: {
                'xsm': '420px'
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
