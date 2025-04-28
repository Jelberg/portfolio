import { heroui } from '@heroui/react'; // Cambia esto
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            boxShadow: {
                white: '-4px 0 3px -1px rgba(255, 255, 255, 0.5)'
            }
        }
    },
    darkMode: 'class',
    plugins: [
        heroui({
            //prefix: 'hrui-', // prefix for themes variables
            //addCommonColors: false, // override common colors (e.g. "blue",green,"pink").
            defaultTheme: 'dark', // default theme from the themes object
            //defaultExtendTheme: 'dark', // default theme to extend on custom themes
            layout: {}, // common layout tokens (applied to all themes)
            themes: {
                light: {
                    layout: {}, // light theme layout tokens
                    colors: {} // light theme colors
                },
                dark: {
                    layout: {}, // dark theme layout tokens
                    colors: {
                        primary: '#e0f11f'
                    } // dark theme colors
                } // ... custom themes
            }
        })
    ]
};

export default config;
