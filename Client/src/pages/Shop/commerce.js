// Stub for Commerce.js – use your own backend or replace with real @chec/commerce.js
const commerce = {
  products: {
    retrieve: async (id) => {
      if (id) {
        try {
          const res = await fetch(`http://localhost:5000/book/${id}`);
          if (res.ok) {
            const data = await res.json();
            return {
              name: data.title || data.name || "",
              price: { formatted_with_symbol: data.price != null ? `$${Number(data.price).toFixed(2)}` : "" },
              media: { source: data.image || data.cover || "" },
              quantity: data.quantity ?? 0,
              description: data.description || "",
            };
          }
        } catch (_) {}
      }
      return { name: "", price: { formatted_with_symbol: "" }, media: { source: "" }, quantity: 0, description: "" };
    },
  },
};

export { commerce };
export default commerce;
