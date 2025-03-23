import { auth } from "@/auth"; // Adjust import path as needed
import { NavbarClient } from "./navbar-client";
import { createClient } from "@/utils/supabase/server";

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}

const Navbar = async ({ logo }: NavbarProps) => {
  // Fetch session data on the server
  const session = await auth();
  const supabase = await createClient();
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", session!.user!.email)
    .single();
  // Pass the session to the client component
  return <NavbarClient logo={logo} user={user} />;
};

export { Navbar };
