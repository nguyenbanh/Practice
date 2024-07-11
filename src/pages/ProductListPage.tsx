import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_ROUTE } from "../routers/router";
import { DataContext } from "../contexts/DataContext";

const ProductListPage = () => {
  const { products, products2, setProducts2, setCarts, carts } =
    useContext(DataContext);

  const onColorChange = (color: string, productIndex: number) => {
    const _products2 = [...products2];
    _products2[productIndex]["color"] = color;
    setProducts2(_products2);
  };
  const carouselResponsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const carouselItemTemplate = (product: any) => {
    return (
      <div className=" text-center py-5 bg-white">
        <div className="mb-3">
          <img
            src={`${product.image}`}
            alt={product.name}
            className="w-11 shadow-2 h-20rem"
          />
        </div>
        <div>
          <h4
            className="p-mb-1 cursor-pointer"
            onClick={() => navigate(`${USER_ROUTE.PRODUCT_DETAIL_BASE}/1`)}
          >
            {product.name}
          </h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <span
            className={`product-badge status-${product.inventoryStatus?.toLowerCase()}`}
          >
            {product.inventoryStatus}
          </span>
          <div className="car-buttons mt-5">
            <Button
              type="button"
              rounded
              className=" mr-2"
              icon="pi pi-search"
            ></Button>
            <Button
              type="button"
              rounded
              severity="success"
              className="mr-2"
              icon="pi pi-star"
            ></Button>
            <Button
              type="button"
              rounded
              severity="help"
              icon="pi pi-cog"
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const navigate = useNavigate();

  return (
    <div>
      <Carousel
        className="card"
        value={products}
        numVisible={4}
        numScroll={2}
        responsiveOptions={carouselResponsiveOptions}
        itemTemplate={carouselItemTemplate}
        autoplayInterval={3000}
      ></Carousel>
      <div className="card">
        <div className="text-900 font-medium text-4xl mb-4">
          Popular Products
        </div>
        <p className="mt-0 p-0 mb-5 text-700 text-2xl">Exclusive Selection</p>
        <div className="grid -mt-3 -ml-3 -mr-3">
          {products.map((product, i) => {
            return (
              <div key={i} className="col-12 md:col-6 lg:col-4 xl:col-3">
                <div className="p-2">
                  <div className="shadow-2 p-4 surface-card border-round">
                    <div className="relative mb-3">
                      <span
                        className="text-900 shadow-2 px-3 py-2 absolute bg-red-500"
                        style={{
                          borderRadius: "1.5rem",
                        }}
                      >
                        -35%
                      </span>
                      <img
                        src={"/" + product.image}
                        className="w-full h-20rem"
                        alt={i.toString()}
                      />
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                      <span
                        className="text-900 font-medium text-xl cursor-pointer"
                        onClick={() =>
                          navigate(`${USER_ROUTE.PRODUCT_DETAIL_BASE}/${i}`)
                        }
                      >
                        {product.name}
                      </span>
                      <span>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <span className="font-medium">5.0</span>
                      </span>
                    </div>
                    <p className="mt-0 mb-3 text-700 line-height-3">
                      Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <div className="flex align-items-center justify-content-between">
                      <span className="text-primary text-xl font-medium">
                        {product.price}
                      </span>
                      <Button
                        type="button"
                        className="w-fit border-1 border-white border-round py-2 px-3 bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer"
                      >
                        <i className="pi pi-shopping-cart mr-3 text-base"></i>
                        <span
                          className="text-base"
                          onClick={() => {
                            const existCart = carts.find(
                              (item) => item.id === product.id
                            );
                            if (existCart) {
                              console.log("95738");

                              setCarts(
                                carts.map((item) => {
                                  return {
                                    ...item,
                                    quantity:
                                      item.id === product.id
                                        ? item.quantity + 1
                                        : item.quantity,
                                  };
                                })
                              );
                            } else {
                              setCarts([...carts, { ...product, quantity: 1 }]);
                              console.log("111111");
                            }
                          }}
                        >
                          Add to Cart
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card">
        <div className="text-900 font-medium text-4xl mb-4">
          Popular Products
        </div>
        <p className="mt-0 p-0 mb-5 text-700 text-2xl">Exclusive Selection</p>
        <div className="grid -mt-3 -ml-3 -mr-3">
          {products2.map((product, i) => {
            return (
              <div
                key={i}
                className="col-12 md:col-6 lg:col-4 xl:col-3 mb-5 lg:mb-0"
              >
                <div className="mb-3 relative shadow-2 p-4 surface-card border-round">
                  <img
                    src={product.image}
                    className="w-full h-20rem"
                    alt={i.toString()}
                  />
                  <Button
                    type="button"
                    className="border-1 border-white border-round py-2 px-3 bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer"
                    style={{
                      bottom: "1rem",
                      left: "1rem",
                      width: "calc(100% - 2rem)",
                    }}
                  >
                    <i className="pi pi-shopping-cart mr-3 text-base"></i>
                    <span className="text-base">Add to Cart</span>
                  </Button>
                  <div className="flex flex-column align-items-center">
                    <span
                      className="text-xl text-900 font-medium mb-3 cursor-pointer"
                      onClick={() =>
                        navigate(`${USER_ROUTE.PRODUCT_DETAIL_BASE}/1`)
                      }
                    >
                      Product Name
                    </span>
                    <span className="text-xl text-900 mb-3">$150.00</span>
                    <div className="flex align-items-center mb-3">
                      <div
                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{
                          width: "1.2rem",
                          height: "1.2rem",
                          boxShadow:
                            product.color === "Bluegray"
                              ? "0 0 0 0.2rem var(--bluegray-500)"
                              : undefined,
                        }}
                        onClick={() => onColorChange("Bluegray", i)}
                      ></div>
                      <div
                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 hover:border-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{
                          width: "1.2rem",
                          height: "1.2rem",
                          boxShadow:
                            product.color === "Indigo"
                              ? "0 0 0 0.2rem var(--indigo-500)"
                              : undefined,
                        }}
                        onClick={() => onColorChange("Indigo", i)}
                      ></div>
                      <div
                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 hover:border-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{
                          width: "1.2rem",
                          height: "1.2rem",
                          boxShadow:
                            product.color === "Green"
                              ? "0 0 0 0.2rem var(--purple-500)"
                              : undefined,
                        }}
                        onClick={() => onColorChange("Green", i)}
                      ></div>
                      <div
                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 hover:border-cyan-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{
                          width: "1.2rem",
                          height: "1.2rem",
                          boxShadow:
                            product.color === "Blue"
                              ? "0 0 0 0.2rem var(--cyan-500)"
                              : undefined,
                        }}
                        onClick={() => onColorChange("Blue", i)}
                      ></div>
                    </div>
                    <span className="text-700">{product.color}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
