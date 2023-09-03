import { NextPage } from "next";
import { productService } from "../../service/product.service";
import Main from "../../components/page/main/main";

const Home: NextPage<any> = async () => {
  const { carts } = await productService.getAllProduct();
  const products: any[] = [];
  carts.forEach((element: any) => {
    element.products.forEach((item: any) => {
      products.push(item);
    });
  });
  // console.log(products, "products");
  return <Main {...{ products }} />;
};

export default Home;
