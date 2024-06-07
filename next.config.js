/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  basePath: '/<repository-name>', // Replace '<repository-name>' with your GitHub repository name
  assetPrefix: '/<repository-name>/',

  images: {
    loader: 'imgix', // Use 'imgix' as the loader
    path: '', // Specify an empty path to use relative URLs for image loading
    unoptimized: true // Disable optimization to avoid server-side processing
  }
}
 
module.exports = nextConfig
