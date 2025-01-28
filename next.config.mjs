/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/**',
          search: '',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/**',
          search: '',
        },
      ],
      // domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
    },
  };;

export default nextConfig;
