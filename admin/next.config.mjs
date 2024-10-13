/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "165.22.220.228"],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '165.22.220.228',
                port: '',
                pathname: '/api/v1/uploads/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '',
                pathname: '/api/v1/uploads/**',
            },
        ]
    },
    basePath: '/admin',
    distDir: '/admin/.next'
};

export default nextConfig;
