// Stub for Commerce.js – use your own backend or replace with real @chec/commerce.js
const commerce = {
  products: {
    retrieve: async () => ({ name: "", price: { formatted_with_symbol: "" }, media: { source: "" }, quantity: 0, description: "" }),
  },
};

export { commerce };
export default commerce;
