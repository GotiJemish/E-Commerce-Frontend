
"use client";

import withAuth from "@/components/hocs/Auth/withAuth";

const ProfilePage = () => {
  return <div>Welcome to profile!</div>;
};

export default withAuth(ProfilePage);
