import React from "react";
import ProfileProvider from "../src/components/ProfileProvider";
import "./App.css";
import Sidemenu from "../src/components/Sidemenu";
function App() {
  return (
    <ProfileProvider>
      <Sidemenu />
    </ProfileProvider>
  );
}
export default App;
