import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface MenuContextProps {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
}

export const MenuContext = createContext({} as MenuContextProps);

interface MenuProviderProps {
  children: React.ReactNode;
}

export const MenuProvider = (props: MenuProviderProps) => {
  const [activeMenu, setActiveMenu] = useState("");

  const value = {
    activeMenu,
    setActiveMenu,
  };

  return (
    <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
  );
};
