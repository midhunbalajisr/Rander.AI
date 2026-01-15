// API Configuration
// In development, Vite proxies /api to localhost:3001
// In production, set VITE_API_URL to your backend server URL

export const API_BASE_URL = import.meta.env.VITE_API_URL || "";
