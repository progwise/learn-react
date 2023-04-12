import { ReactNode, createContext, useContext, useState } from "react";

interface UserContext {
  isLoggedIn: boolean;
  user?: {
    name: string;
    id: string;
  };
  login: () => void;
  logout: () => void;
}

export const UserContext = createContext<UserContext>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = (props: UserContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user: { id: "1", name: "Max Mustermann" },
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
