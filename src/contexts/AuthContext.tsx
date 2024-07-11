import { createContext, useMemo } from "react";
import { useUser } from "../hooks/useUser";
import { UserProfile } from "../types/authType";

export interface AuthContextType {
  user: UserProfile | null;
  setUser: (user: any | null) => void;
  addUser: (user: any) => void;
  removeUser: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider = (props: any) => {
  const { user, setUser, addUser, removeUser } = useUser();

  const contextValue = useMemo(() => {
    return { user, setUser, addUser, removeUser };
  }, [user, setUser, addUser, removeUser]);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
