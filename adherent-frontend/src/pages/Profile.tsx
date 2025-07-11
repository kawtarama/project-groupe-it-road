import React from "react";
import ProfileForm from "../components/profile/ProfileForm";
import ProfileImage from "../components/profile/ProfileImage";
import ProfileSettings from "../components/profile/ProfileSettings";

const Profile: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Profil utilisateur</h1>
      <ProfileImage />
      <ProfileForm />
      <ProfileSettings />
    </div>
  );
};

export default Profile;
