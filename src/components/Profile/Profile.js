import React from "react";
import useProfile from "../../hooks/useProfile";
import useProfilAction from "../../hooks/usProfilAction";
import "./profile.css";

const Profile = () => {
    console.log("profile");
    const data = useProfile();
    const setName = useProfilAction();
    const handleChangeName = (e) => {
        let newProfile = {
         ...data,   name: e.target.value
        };
        setName(newProfile);
    };
    const handleChangeFamily = (e) => {
        let newProfile = {
           ...data, family: e.target.value
        };
        setName(newProfile);
    };
    const handleChangeBio = (e) => {
        let newProfile = {
            ...data, bio: e.target.value
        };
        setName(newProfile);
    };
    return ( 
    < div className = "container" >
        <img className = "pro-pic"
        src = {data.image}
        alt = "profile" />
        <label htmlFor = "name" > First name: </label> 
         <input type = "text"
        id = "name"
        name = "name"
        value = { data.name }
        onChange = { handleChangeName }/> 
        <label htmlFor = "lname" > Last name: </label> 
        <input type = "text"
        id = "family"
        name = "family"
        value = { data.family }
        onChange = { handleChangeFamily }
        />
         <label htmlFor = "bio" > Bio: </label> 
         <textarea onChange = { handleChangeBio }
        value = { data.bio }
        className = "bio-txt" name="bio">
        </textarea> 
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