module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#06202a',
                secondary: '#041e29'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
