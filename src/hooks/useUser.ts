import { useState } from "react";
import Cookies from "universal-cookie";
export const useUser = () => {
  const cookies = new Cookies(null);

  const [user, setUser] = useState<any | null>(() => {
    return cookies.get("user") || {
      role:["USER"]
    };
  });

  const addUser = (user: any) => {
    setUser(user);
    cookies.set("user", user, {
      path: "/",
      maxAge: 60 * 60 * 24,
      secure: true,
    });
  };

  const removeUser = () => {
    setUser(null);
    cookies.remove("user", { path: "/" });
  };
  return { user, setUser, addUser, removeUser };
};
