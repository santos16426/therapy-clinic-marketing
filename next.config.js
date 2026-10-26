/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Railway Docker / self-host only. Vercel does not need standalone.
  ...((process.env.SELF_HOST === "1" || process.env.RAILWAY_ENVIRONMENT)
    ? { output: "standalone" }
    : {}),
  transpilePackages: ["three"],
};
