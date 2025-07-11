import React, { useState } from "react";

const ProfileImage: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="text-center mb-4">
      {image && <img src={image} alt="preview" className="w-24 h-24 rounded-full mx-auto mb-2" />}
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
};

export default ProfileImage;
