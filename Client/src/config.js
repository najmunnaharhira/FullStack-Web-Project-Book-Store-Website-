// API base URL: use VITE_API_URL on Vercel (e.g. your backend URL), fallback to localhost in dev
export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
