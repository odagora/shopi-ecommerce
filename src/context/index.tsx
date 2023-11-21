import { PropsWithChildren, createContext, useState } from "react";

export interface AppContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState<number>(0);

  const contextData: AppContextProps = {
    count,
    setCount,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}
