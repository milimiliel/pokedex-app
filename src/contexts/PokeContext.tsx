import { ReactNode, createContext } from "react";

interface Props {
  children: ReactNode;
}

const PokeApiContext = createContext({});

function Provider({ children }: Props) {
  return (
    <PokeApiContext.Provider value={{}}>{children}</PokeApiContext.Provider>
  );
}

export default Provider;
