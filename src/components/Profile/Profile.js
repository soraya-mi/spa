import React from "react";
import useProfile from "../../hooks/useProfile";
import useProfilAction from "../../hooks/usProfilAction";
import "./profile.css";

const Profile = () => {
  const data = useProfile();
  const setName = useProfilAction();
  const handleChangeName = (e) => {
    let newProfile = {
      name: e.target.value,
      family: data.family,
      bio: data.bio,
    };
    setName(newProfile);
  };
  const handleChangeFamily = (e) => {
    let newProfile = {
      name: data.name,
      family: e.target.value,
      bio: data.bio,
    };
    setName(newProfile);
  };
  const handleChangeBio = (e) => {
    let newProfile = {
      name: data.name,
      family: data.family,
      bio: e.target.value,
    };
    setName(newProfile);
  };
  return (
    <div className="container">
      <img
        className="pro-pic"
        src="https://icon-library.com/images/female-user-icon/female-user-icon-29.jpg"
        alt="profile"
      />
      <label htmlFor="fname">First name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={data.name}
        onChange={handleChangeName}
      />
      <label htmlFor="lname">Last name:</label>
      <input
        type="text"
        id="lname"
        name="lname"
        value={data.family}
        onChange={handleChangeFamily}
      />
      <label htmlFor="bio">Bio:</label>
      <textarea
        onChange={handleChangeBio}
        value={data.bio}
        className="bio-txt"
      ></textarea>
    </div>
  );
};
export default Profile;

/* 
     <input type="textarea" id="bio" name="bio" value=".." /><span>
Name:<input type="text" label="name"></input>
</span>
<span>Family:</span>
<input type="text" label="family"></input>
<span>Bio:</span>
<input type="text" label="bio"></input> */
