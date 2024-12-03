'use client'
import { createContext } from "react";

export type LoadingContextProps = {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
};

const loadingDefault: LoadingContextProps = {
  isLoading: false,
  setLoading: () => { },
};

export const LoadingContext = createContext(loadingDefault);
