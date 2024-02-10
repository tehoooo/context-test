"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { FC } from "react";

interface NameContextType {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

export const NameContext = createContext<NameContextType>({
  name: "",
  setName: () => {},
});

type Props = {
  children: ReactNode;
};

const NameProvider: FC<Props> = ({ children }) => {
  const [name, setName] = useState<string>("");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export default NameProvider;
