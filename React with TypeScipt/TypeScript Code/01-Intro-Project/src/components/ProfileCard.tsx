import React from "react";

interface ProfileCardWrapperProps {
  children: React.ReactNode;
}

function ProfileCard({
  children,
}: ProfileCardWrapperProps) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default ProfileCard;