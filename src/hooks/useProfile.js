import React from "react";
import { ProfileProviderContext } from "../components/ProfileProvider";

function useProfile() {
  return React.useContext(ProfileProviderContext);
}

export default useProfile;
