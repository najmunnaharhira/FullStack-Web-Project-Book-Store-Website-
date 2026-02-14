// Auth helper – reads user/token from localStorage (set by your login flow)
export function isAuthenticated() {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const token = localStorage.getItem("genius-token") || null;
    return { user: user?.uid ? { _id: user.uid, ...user } : { _id: null }, token };
  } catch {
    return { user: { _id: null }, token: null };
  }
}
