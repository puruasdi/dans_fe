"use client";
import { createContext } from "react";
import { ProfileDto } from "../model/apiModel";

export type UserContextProps = {
  profile: ProfileDto | null;
  setProfile: (value: ProfileDto | null) => void;
};

const profileDefault: UserContextProps = {
  profile: null,
  setProfile: () => {}
}

export const UserContext = createContext(profileDefault);
