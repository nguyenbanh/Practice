import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface DataContextProps {
  products: any[];
  setProducts: Dispatch<SetStateAction<any[]>>;

  products2: any[];
  setProducts2: Dispatch<SetStateAction<any[]>>;

  carts: any[];
  setCarts: Dispatch<SetStateAction<any[]>>;

  historyOrder: any[];
  setHistoryOrder: Dispatch<SetStateAction<any[]>>;
}

export const DataContext = createContext({} as DataContextProps);

interface DataProviderProps {
  children: React.ReactNode;
}

const firstProducts = [
  {
    id: 1,
    name: "Trà mate a",
    price: "$82.00",
    size: "Medium",
    color: "White",
    image: "demo/images/ecommerce/product-list/product-list-4-2.png",
  },
  {
    id: 2,
    name: "Trà mate b",
    price: "$554.00",
    size: "Medium",
    color: "White",
    image: "demo/images/ecommerce/product-list/product-list-4-3.png",
  },
  {
    id: 3,
    name: "Trà mate c",
    price: "$72.00",
    image: "demo/images/ecommerce/product-list/product-list-4-4.png",
  },
  {
    id: 4,
    name: "Trà mate d",
    price: "$9229.00",
    size: "Medium",
    color: "White",
    image: "demo/images/ecommerce/product-list/product-list-4-5.png",
  },
  {
    id: 5,
    name: "Trà mate e",
    price: "$8269.00",
    size: "Medium",
    color: "White",
    image: "demo/images/ecommerce/product-list/product-list-4-6.png",
  },
];

const secondProducts = [
  {
    id: 15,
    name: "Trà mate f",
    price: "$9",
    size: "Medium",
    color: "Bluegray",
    image: "/demo/images/ecommerce/product-list/product-list-2-1.png",
  },
  {
    id: 14,
    name: "Trà mate g",
    price: "$129.00",
    size: "Medium",
    color: "Indigo",
    image: "/demo/images/ecommerce/product-list/product-list-2-2.png",
  },
  {
    id: 13,
    name: "Trà mate g",
    price: "$977.00",
    size: "Medium",
    color: "Green",
    image: "/demo/images/ecommerce/product-list/product-list-4-3.png",
  },
  {
    id: 12,
    name: "Trà mate j",
    price: "$99.00",
    size: "Medium",
    color: "Blue",
    image: "/demo/images/ecommerce/product-list/product-list-2-4.png",
  },
];

export const DataProvider = (props: DataProviderProps) => {
  const [products, setProducts] = useState<any[]>(firstProducts);
  const [products2, setProducts2] = useState<any[]>(secondProducts);
  const [carts, setCarts] = useState<any[]>([]);
  const [historyOrder, setHistoryOrder] = useState<any[]>([]);

  const value = {
    products,
    setProducts,
    carts,
    setCarts,
    historyOrder,
    setHistoryOrder,
    products2,
    setProducts2,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
