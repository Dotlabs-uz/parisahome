/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '165.22.220.228',
            },
        ],

    }
};

export default nextConfig;
