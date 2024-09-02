"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const signoutUser = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      router.push("/signin");
    }
  };
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/signin">Signin</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/admin">Admin</Link>
      <button onClick={signoutUser}>Sign out</button>
    </header>
  );
};

export default Header;
