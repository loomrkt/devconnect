
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { createClient } from "./utils/supabase/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ profile }) {
      try {
        const supabase = await createClient();

        // check if user exists in the database
        const { data: user } = await supabase
          .from("users")
          .select("*")
          .eq("email", profile!.email)
          .single();

        // if user does not exist, insert user into the database
        if (!user) {
          const { error } = await supabase.from("users").upsert({
            email: profile!.email,
            name: profile!.name,
            image: profile!.avatar_url,
            githubUrl: profile!.html_url,
          });

          if (error) throw error;
        }

        return true;
      } catch (error) {
        console.error("Database error:", error);
        return false;
      }
    },
  },
});