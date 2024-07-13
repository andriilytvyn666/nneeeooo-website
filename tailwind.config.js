/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  theme: {
    colors: {
      fg: '#FFFFFF',
      bg: '#000000',
      footer: '#4A4A4A',
    },
    fontFamily: {
      body: ['Inter', 'Helvetica', 'Arial'],
    },
    fontSize: {
      body: [
        '1rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '600',
        },
      ],
      title: [
        '1.25rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '700',
        },
      ],
    },
    extend: {},
  },
  plugins: [],
}
