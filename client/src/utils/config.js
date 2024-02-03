const BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_BASE_URL
  : `http://localhost:${import.meta.env.VITE_PORT}/api`;

const IMAGE_SIZE_LIMIT = 2 * 1024 * 1024; // 2M

const config = { BASE_URL, IMAGE_SIZE_LIMIT };

// console.log(config);

export default config;
