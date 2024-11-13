// Archivo: next.config.js
module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)', // Aplica a toda la aplicación
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'none'; script-src 'self' https://vercel.live;",
            },
          ],
        },
      ]
    },
  }
  