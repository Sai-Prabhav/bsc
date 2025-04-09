export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0E79C1',
          yellow: '#fed81f',
          red: '#EE1B24',
        },
        gradient: {
          'blue-start': '#0E79C1',
          'blue-end': '#085890',
        }
      }
    }
  }
}