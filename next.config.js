const nextConfig = {
  reactStrictMode: true,
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      { source: "/components", destination: "/#work", permanent: true },
      { source: "/landing", destination: "/", permanent: true },
      { source: "/profile", destination: "/#about", permanent: true },
      { source: "/login", destination: "/#estimate", permanent: true }
    ];
  }
};

module.exports = nextConfig;
