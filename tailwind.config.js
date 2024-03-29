/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            xs: { min: "200px", max: "480px" },
            sm: { min: "481px", max: "576px" },

            md: { min: "577px", max: "768px" },

            lg: { min: "769px", max: "992px" },

            xl: { min: "993px", max: "1200px" },

            "2xl": { min: "1201px", max: "1440px" },
        },
    },
    plugins: [],
}
