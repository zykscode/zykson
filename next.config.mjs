// next.config.js
import withPlaiceholder from "@plaiceholder/next";
import withPlugins from "next-compose-plugins"
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  swcMinify: true,
  
};

export default withPlugins([withContentlayer,withPlaiceholder], nextConfig )