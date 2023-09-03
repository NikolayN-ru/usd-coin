import { NextPage } from "next";
import { productService } from "../../service/product.service";
import Main from "../../components/page/main/main";
import { iProduct } from "../../types/product.types";

const Home: NextPage<any> = async () => {
  const { carts } = await productService.getAllProduct();
  const products: any[] = [];
  carts.forEach((element: any) => {
    element.products.forEach((item: iProduct) => {
      products.push(item);
    });
  });
  return <Main {...{ products }} />;
};

export default Home;
