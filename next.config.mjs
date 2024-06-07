/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '', // Replace '<repository-name>' with your GitHub repository name
  assetPrefix: '',

  images: {
    loader: 'imgix', // Use 'imgix' as the loader
    path: '', // Specify an empty path to use relative URLs for image loading
    unoptimized: true // Disable optimization to avoid server-side processing
  }
};

export default nextConfig;
