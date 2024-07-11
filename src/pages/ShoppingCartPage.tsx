import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";
import { useNavigate } from "react-router-dom";
import { USER_ROUTE } from "../routers/router";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function ShoppingCartPage() {
  const { carts = [], setCarts } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="flex flex-column align-items-center mb-6">
        <div className="text-900 text-4xl mb-4 font-medium">
          Your cart total is $82.00
        </div>
        <p className="text-700 font-medium text-xl mt-0 mb-4">
          FREE SHIPPING AND RETURN
        </p>
        <Button
          label="Check Out"
          onClick={() => navigate(USER_ROUTE.CHECKOUT)}
        />
      </div>
      <div className="border-round surface-border border-1">
        <ul className="list-none p-0 m-0">
          {carts.length > 0 &&
            carts.map((product, i) => {
              return (
                <li
                  key={i}
                  className={classNames(
                    "p-3 surface-border flex align-items-start sm:align-items-center",
                    { "border-bottom-1": i !== carts.length - 1 }
                  )}
                >
                  <img
                    src={product.image}
                    className="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2"
                    alt={product.name}
                  />
                  <div className="flex flex-column">
                    <span className="text-900 font-semibold text-xl mb-2">
                      {product.name}
                    </span>
                    <span className="text-700 font-medium mb-3">
                      {product.color} | {product.size}
                    </span>
                    <span className="text-900 font-medium">
                      <div className="flex flex-auto justify-content-between align-items-center">
                        <InputNumber
                          showButtons
                          buttonLayout="horizontal"
                          min={0}
                          inputClassName="w-2rem text-center py-2 px-1 border-transparent outline-none shadow-none"
                          value={product.quantity}
                          className="border-1 surface-border border-round"
                          decrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1"
                          incrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1"
                          incrementButtonIcon="pi pi-plus"
                          decrementButtonIcon="pi pi-minus"
                        ></InputNumber>
                      </div>
                    </span>
                  </div>
                  <span className="text-900 font-medium text-lg ml-auto">
                    <div className="flex flex-column sm:align-items-end">
                      <span className="text-900 text-xl font-medium mb-2 sm:mb-3">
                        $20.00
                      </span>
                      <a
                        className="cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors transition-duration-300"
                        tabIndex={0}
                        onClick={() => {
                          setCarts(
                            carts.filter((item) => item.id !== product.id)
                          );
                        }}
                      >
                        Remove
                      </a>
                    </div>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="flex">
        <div className="w-12rem hidden md:block"></div>
        <ul className="list-none py-0 pr-0 pl-0 md:pl-5 mt-6 mx-0 mb-0 flex-auto">
          <li className="flex justify-content-between mb-4">
            <span className="text-xl text-900 font-semibold">Subtotal</span>
            <span className="text-xl text-900">$82.00</span>
          </li>
          <li className="flex justify-content-between mb-4">
            <span className="text-xl text-900 font-semibold">Shipping</span>
            <span className="text-xl text-900">Free</span>
          </li>
          <li className="flex justify-content-between mb-4">
            <span className="text-xl text-900 font-semibold">VAT</span>
            <span className="text-xl text-900">$8.00</span>
          </li>
          <li className="flex justify-content-between border-top-1 surface-border mb-4 pt-4">
            <span className="text-xl text-900 font-bold text-3xl">Total</span>
            <span className="text-xl text-900 font-bold text-3xl">$90.00</span>
          </li>
          <li className="flex justify-content-end">
            <Button
              label="Check Out"
              onClick={() => navigate(USER_ROUTE.CHECKOUT)}
            ></Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
