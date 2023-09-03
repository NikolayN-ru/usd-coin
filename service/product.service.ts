export const productService = {
  async getAllProduct() {
    const res = await fetch(`https://dummyjson.com/carts`, { // fetch некста
      // next: { revalidate: 500000 },
    });
    const prodcuts = await res.json();
    return prodcuts;
  },
};
