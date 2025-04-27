/** @type {import('postcss-load-config').Config} */
export default {
    plugins: {
        '@tailwindcss/postcss': {}, // <-- Usa el paquete explícito
        autoprefixer: {}
    }
};
