/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./*.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#A0C4C4', // Soft Teal
                secondary: '#FFDAB9', // Peach Puff
                accent: '#D8BFD8', // Thistle
                bg: {
                    light: '#FDFCF5', // Old Lace/Cream
                    mint: '#F0FFF0', // Honeydew
                    peach: '#FFF5EE', // Seashell
                },
                text: {
                    main: '#4A4A4A',
                    soft: '#6B6B6B'
                }
            },
            fontFamily: {
                sans: ['Quicksand', 'Nunito', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
