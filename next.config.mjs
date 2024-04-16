/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react','react-icons'], // add this
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      }
    ]
  }
};

export default nextConfig;
