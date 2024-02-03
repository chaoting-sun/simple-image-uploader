import path from "path";

const BASE_URL = import.meta.env.PROD
  ? path.join(import.meta.env.VITE_BASE_URL, "api")
  : `http://localhost:${import.meta.env.VITE_PORT}/api`;

const IMAGE_SIZE_LIMIT = 2 * 1024 * 1024; // 2M

const config = { BASE_URL, IMAGE_SIZE_LIMIT };

// console.log(config);

export default config;
