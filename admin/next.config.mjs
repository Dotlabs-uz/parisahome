/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '165.22.220.228',
                port: '',
                pathname: '/api/v1/uploads/**',
            }
        ]
    },
    basePath: '/admin',
    distDir: '/admin/.next'
};

export default nextConfig;
