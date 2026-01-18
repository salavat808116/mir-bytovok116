/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация для production
  reactStrictMode: true,
  
  // SEO оптимизация
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
