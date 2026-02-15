/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1565C0',
          900: '#0D47A1',
        },
        accent: '#00BFA5',
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        success: '#4CAF50',
        error: '#EF5350',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['56px', { lineHeight: '64px', fontWeight: '700' }],
        'h1': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.08)',
        'md': '0 4px 12px rgba(0,0,0,0.1)',
        'lg': '0 8px 30px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'card': '8px',
        'button': '12px',
      },
      maxWidth: {
        'content': '1280px',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '24': '96px',
      },
    },
  },
  plugins: [],
}
