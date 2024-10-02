/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
                {
                    protocol: 'https',
                    hostname: 'firebasestorage.googleapis.com' //Caso liberar para quaquer host, colocar '**'.
                }
        ]
    }
};

export default nextConfig;
