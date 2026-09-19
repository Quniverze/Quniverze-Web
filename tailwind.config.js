/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F7F6F2',
          surface: '#FFFFFF',
          primary: '#111827',
          secondary: '#4B5563',
          muted: '#6B7280',
          subtle: '#9CA3AF',
          border: '#E5E7EB',
          'border-subtle': '#ECEBE4',
          accent: '#111827',
          tag: '#F0EFEA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
