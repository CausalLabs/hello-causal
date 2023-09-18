/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/extra",
        destination: "/extras",
        permanent: true,
      },
    ];
  },
};
