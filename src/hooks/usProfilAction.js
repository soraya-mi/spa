import React from "react";
import { ProfileProviderActionContext } from "../components/ProfileProvider";

function useProfilAction() {
  return React.useContext(ProfileProviderActionContext);
}

export default useProfilAction;
