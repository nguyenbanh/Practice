import { Panel } from "primereact/panel";
import { classNames } from "primereact/utils";

function OrderSummary() {
  const products = [
    {
      name: "Cotton Sweatshirt",
      size: "Medium",
      color: "White",
      price: "$12",
      quantity: "1",
      image: "demo/images/ecommerce/product-list/product-list-4-3.png",
    },
    {
      name: "Regular Jeans",
      size: "Large",
      color: "Black",
      price: "$24",
      quantity: "1",
      image: "demo/images/ecommerce/product-list/product-list-4-6.png",
    },
  ];

  return (
    <div className="p-2">
      {[1, 2, 3].map((item) => {
        return (
          <Panel className="mb-2" key={item} header="Order" toggleable>
            <div className="card">
              <div className="flex-auto mt-3 md:mt-0 mb-3">
                <div className="font-medium text-2xl text-900 mt-3 mb-3">
                  Order Processing
                </div>
                <div
                  className="border-round overflow-hidden surface-300 mb-3"
                  style={{ height: "7px" }}
                >
                  <div className="bg-primary border-round w-4 h-full"></div>
                </div>
                <div className="flex w-full justify-content-between">
                  <span className="text-900 text-xs sm:text-base">Ordered</span>
                  <span className="text-900 font-medium text-xs sm:text-base">
                    Processing
                  </span>
                  <span className="text-500 text-xs sm:text-base">
                    Shipping
                  </span>
                  <span className="text-500 text-xs sm:text-base">
                    Delivered
                  </span>
                </div>
              </div>
              <div className="border-round surface-border border-1">
                <ul className="list-none p-0 m-0">
                  {products.map((product, i) => {
                    return (
                      <li
                        key={i}
                        className={classNames(
                          "p-3 surface-border flex align-items-start sm:align-items-center",
                          { "border-bottom-1": i !== products.length - 1 }
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
                            Quantity: {product.quantity}
                          </span>
                        </div>
                        <span className="text-900 font-medium text-lg ml-auto">
                          {product.price}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-wrap mt-5 pb-3">
                <div className="w-full lg:w-6 pl-3">
                  <span className="font-medium text-900">Shipping Address</span>
                  <div className="flex flex-column text-900 mt-3 mb-5">
                    <span className="mb-1">Celeste Slater</span>
                    <span className="mb-1">
                      606-3727 Ullamcorper. Roseville NH 11523
                    </span>
                    <span>(786) 713-8616</span>
                  </div>

                  <span className="font-medium text-900">Payment</span>
                  <div className="flex align-items-center mt-3">
                    <img
                      src="/demo/images/ecommerce/ordersummary/visa.png"
                      className="w-4rem mr-3"
                      alt="visa"
                    />
                    <div className="flex flex-column">
                      <span className="text-900 mb-1">Visa Debit Card</span>
                      <span className="text-900 font-medium">
                        **** **** **** 1234
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6 pl-3 lg:pl-0 lg:pr-3 flex align-items-end mt-5 lg:mt-0">
                  <ul className="list-none p-0 m-0 w-full">
                    <li className="mb-3">
                      <span className="font-medium text-900">Summary</span>
                    </li>
                    <li className="flex justify-content-between mb-3">
                      <span className="text-900">Subtotal</span>
                      <span className="text-900 font-medium text-lg">
                        $36.00
                      </span>
                    </li>
                    <li className="flex justify-content-between mb-3">
                      <span className="text-900">Shipping</span>
                      <span className="text-900 font-medium text-lg">
                        $5.00
                      </span>
                    </li>
                    <li className="flex justify-content-between mb-3">
                      <span className="text-900">Tax</span>
                      <span className="text-900 font-medium text-lg">
                        $4.00
                      </span>
                    </li>
                    <li className="flex justify-content-between border-top-1 surface-border py-3">
                      <span className="text-900 font-medium">Total</span>
                      <span className="text-900 font-bold text-lg">$41.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Panel>
        );
      })}
    </div>
  );
}

export default OrderSummary;
