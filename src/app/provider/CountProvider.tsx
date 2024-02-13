"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { createMixContext } from "next-approuter-context";
import { FC } from "react";

interface CountContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const CountContext = createContext<CountContextType>({
  count: 0,
  setCount: () => {},
});

export const context1 = createMixContext<CountContextType>({
  count: 0,
  setCount: () => {},
});

type Props = {
  children: ReactNode;
};

const CountProvider: FC<Props> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;
