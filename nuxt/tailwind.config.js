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
      fg3: '#181818',
      fg2: '#3F3F3F',
    },
    fontFamily: {
      helvetica: ['Helvetica', 'Arial'],
      stretch: ['Stretch Pro', 'Arial'],
    },
    fontSize: {
      'body': [
        '1rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '600',
        },
      ],
      'body-alt': [
        '1rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '400',
        },
      ],
    },
    extend: {},
  },
  plugins: [],
}
