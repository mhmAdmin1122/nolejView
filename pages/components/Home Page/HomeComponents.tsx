import React from "react";

const HomeComponents = ({ children }: any) => {
  return (
    <div className="flex items-start justify-between mt-[12px] w-full px-[25px] gap-4">{children}</div>
  );
};

export default HomeComponents;
