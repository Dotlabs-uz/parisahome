/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '*',
                port: '',
                pathname: '/api/v1/uploads/**',
            }
        ]
    }
};

export default nextConfig;
