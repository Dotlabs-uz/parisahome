/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '*',
                port: '5000',
                pathname: '/api/v1/uploads/**',
            }
        ]
    },
    basePath: '/admin',
    distDir: '/admin/.next'
};

export default nextConfig;
