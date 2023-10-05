import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col mt-20 items-center">{children}</div>;
};
