// API Configuration
// In development, Vite proxies /api to localhost:3001
// In production, set VITE_API_URL to your backend server URL

// Fallback to the known Render URL if VITE_API_URL is not set
export const API_BASE_URL = import.meta.env.DEV
    ? ""
    : (import.meta.env.VITE_API_URL || "https://rander-ai-rljq.onrender.com");
