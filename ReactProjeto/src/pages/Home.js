import React, { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from "../components/Product";
import Hero from "../components/Hero";
import { CartContext } from "../contexts/CartContext";

const Home = () => {
  const { pesquisaName, pricePesquisa, pesquisaOrdem } =
    useContext(CartContext);
  // funct search name
  const handleFilter = (product) => {
    return product.name.toLowerCase().includes(pesquisaName.toLowerCase());
  };
  // funct search price
  const handleFilterPrice = (product) => {
    return (
      pricePesquisa === "0" ||
      (pricePesquisa ? product.preco <= parseInt(pricePesquisa) : true)
    );
  };

  // get products from product context
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return item.category === "Briquedos";
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts
              .filter(handleFilterPrice)
              .filter(handleFilter)
              .sort((atualEstado, proximoEstado) => {
                if (pesquisaOrdem === "crescente") {
                  return atualEstado.name.localeCompare(proximoEstado.name);
                }
                if (pesquisaOrdem === "descrecente") {
                  return proximoEstado.name.localeCompare(atualEstado.name);
                }
                if (pesquisaOrdem === "A-Z") {
                  return atualEstado.name.localeCompare(proximoEstado.name);
                }
              })
              .map((product, index) => {
                return <Product product={product} key={index} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
