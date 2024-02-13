"use client";

import { FC, useContext } from "react";
import { CountContext } from "../provider/CountProvider";

const Page: FC = () => {
  const { count } = useContext(CountContext);
  return <h1>Count : {count}</h1>;
};
export default Page;
