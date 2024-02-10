"use client";

import { FC, useContext } from "react";
import { NameContext } from "../provider/NameProvider";

const Page: FC = () => {
  const { name } = useContext(NameContext);
  return <h1>이름은 {name} 입니다</h1>;
};
export default Page;
