/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация для production
  reactStrictMode: true,
  
  // SEO оптимизация
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Раскомментируйте эти строки, если хотите экспортировать статический сайт для REG.RU:
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },
}

module.exports = nextConfig
