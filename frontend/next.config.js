/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração otimizada para Netlify
  output: 'standalone',
  
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },

  // Melhorar performance
  poweredByHeader: false,
  compress: true,
  
  // Experimental features para melhor SSR
  experimental: {
    esmExternals: true,
  },

  // Headers personalizados
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
