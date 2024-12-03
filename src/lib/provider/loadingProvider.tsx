'use client'
import { useState } from "react";
import { Loading } from "../components/Loading";
import { LoadingContext } from "../contexts/loadingContext";

type LoadingProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

export const LoadingProvider = (children: LoadingProviderProps) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      <Loading isLoading={isLoading}>{children.children}</Loading>
    </LoadingContext.Provider>
  );
};
