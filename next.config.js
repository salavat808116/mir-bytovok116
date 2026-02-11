/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация для production
  reactStrictMode: true,
  
  // SEO оптимизация и настройка изображений
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Раскомментируйте эти строки, если хотите экспортировать статический сайт для REG.RU:
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },
}

module.exports = nextConfig
