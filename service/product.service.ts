export const productService = {
  async getAllProduct() {
    const res = await fetch(`https://dummyjson.com/carts`, {
      //   next: { revalidate: 5000 },
    });
    const prodcuts = await res.json();
    return prodcuts;
  },
};
