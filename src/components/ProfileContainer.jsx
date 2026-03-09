import React, { useState, useRef } from "react";
import "./ProfileContainer.css";

function ProfileContainer() {
  const [profileImage, setProfileImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        
        <div className="image-section" onClick={handleImageClick}>
          <img src={profileImage} alt="profile" className="profile-image" />
          <div className="overlay">Change Photo</div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
          accept="image/*"
        />

        <div className="profile-details">
          <h2>Thejaswi Y</h2>
          <p>Email: thejaswi01@gmail.com</p>
          <p>Role: Associate Software Engineer</p>
        </div>

      </div>
    </div>
  );
}

export default ProfileContainer;