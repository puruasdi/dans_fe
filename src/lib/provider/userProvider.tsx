"use client";
import { useState } from "react";
import { UserContext } from "../contexts/userContext";
import { ProfileDto } from "../model/apiModel";

type UserProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

export const UserProvider = (children: UserProviderProps) => {
  const [profile, setProfile] = useState<ProfileDto | null>(null);

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children.children}
    </UserContext.Provider>
  );
};
