"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // ← App Router compatible
import { useAuth } from "@/Utils/AuthContext";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const path=usePathname()
const firstPathSegment=path.split("/")[0]
    const { isAuthenticated } = useAuth();


    useEffect(() => {
      if (isAuthenticated === false) {
        if (firstPathSegment === "admin") {

          router.replace("/admin/login");
        } else {
          router.replace("/vendor/login");
        }
      }
    }, [isAuthenticated]);

    // Still checking auth
    if (!isAuthenticated ) {
      return <p>Loading...</p>;
    }

    // Authenticated, render the page
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
