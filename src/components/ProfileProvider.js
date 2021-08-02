import React from "react";
export const ProfileProviderContext = React.createContext();
export const ProfileProviderActionContext = React.createContext();
const ProfileProvider = ({ children }) => {
  const [data, setData] = React.useState([]);
  const getData = () => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <ProfileProviderContext.Provider value={data}>
      <ProfileProviderActionContext.Provider value={setData}>
        {children}
      </ProfileProviderActionContext.Provider>
    </ProfileProviderContext.Provider>
  );
};
export default ProfileProvider;
