import React from "react";
import UserUserDetails from "./UserUserDetails";
import UserMovieDetails from "./UserMovieDetails";

const UserDetails: React.FC = () => {
  return (
    <>
      <UserUserDetails />
      <UserMovieDetails />
    </>
  );
};

export default UserDetails;
