/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "aceternity.com",
            },
            {
                protocol: "https", 
                hostname: "assets.aceternity.com"
            },
            {
                protocol: "https",
                hostname: "oss.ejet.com"
            }
        ]
    }
};

export default nextConfig;
