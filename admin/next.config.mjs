/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'new.parisahome.com'],
        unoptimized:true
    },
    basePath: '/admin',
    distDir: '/admin/.next'
};

export default nextConfig;